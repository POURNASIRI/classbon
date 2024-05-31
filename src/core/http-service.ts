import { API_URL } from "@/configs/global";
import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";

import{
    BadRequestError,
    NetworkError,
    NotFoundError,
    UnauthorizedError,
    UnhandledException,
    ValidationError
} from '@/types/http-errors.interface'
import axios from "axios";

type ApiError =  BadRequestError | NetworkError | NotFoundError | UnauthorizedError | UnhandledException | ValidationError


// create new instance for axios
 const httpService = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":'application/json'
    }
})


// add interceptor for axios 

//use response interceptor
httpService.interceptors.response.use(
    // for success response we must return response

    (response)=>{
        return response
    }, error =>{
        if(error?.response){
            const  statusCode = error?.response?.status;
            if(statusCode >= 400 ){
                const errorData:ApiError = error?.response?.data

                if(statusCode === 400 && !errorData.errors){
                    throw {
                        ...errorData
                    }as BadRequestError
                }
                if(statusCode === 400 && errorData.errors){
                    throw {
                        ...errorData
                    }as ValidationError
                }
                if(statusCode === 404){
                    throw {
                        ...errorData,
                        details:'سرویس مورد نظر یافت نشد'
                    }as NotFoundError
                }
                if(statusCode === 403){
                    throw {
                        ...errorData,
                        details:'دسترسی به سرپیس مورد نظر امکان پذیر نمی باشد.'
                    }as UnauthorizedError
                }
                if(statusCode >= 500){
                    throw{
                        ...errorData,
                        details:'خطای سرور'
                    } as UnhandledException
                }

            }else{
                throw{
                    details:'خطای شبکه'
                } as NetworkError
            }
        }
    }
)

// CRUD
 
async function apiBase<T> (
    url:string,
    options?:AxiosRequestConfig
):Promise<T>{
    const response: AxiosResponse = await httpService(url,options);
    return response.data as T
}



async function readData<T>(
    url:string,
    headers?:AxiosRequestHeaders
):Promise<T>{
    const options:AxiosRequestConfig = {
        headers:headers,
        method:'GET'
    }
    return await apiBase<T>(url,options)
}

async function createData<TModel,TResult>(
    url:string,
    data:TModel,
    headers?:AxiosRequestHeaders
): Promise<TResult>{
    const options:AxiosRequestConfig = {
        method:'POST',
        headers:headers,
        data:JSON.stringify(data)
    };
    return await apiBase<TResult>(url,options)
} 


async function UpdateData<TModel,TResult>(
    url:string,
    data:TModel,
    headers?:AxiosRequestHeaders
): Promise<TResult>{
    const options:AxiosRequestConfig = {
        method:'PUT',
        headers:headers,
        data:JSON.stringify(data)
    };
    return await apiBase<TResult>(url,options)
} 


async function deleteData(
    url:string,
    headers?:AxiosRequestHeaders
): Promise<void>{
    const options:AxiosRequestConfig = {
        method:'DELETE',
        headers:headers,
    };
    return await apiBase(url,options)
} 

export{createData,readData,UpdateData,deleteData}
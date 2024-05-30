import { API_URL } from "@/configs/global";

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
export const httpService = axios.create({
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

import {ApiError,} from '@/types/http-errors.interface'
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { errorHandler, networkErrorStrategy } from "./http-error-strategies";





const httpService = axios.create({
    baseURL: `https://api.classbon.com/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

httpService.interceptors.response.use(
    // for success respons
    (response)=>{
        return response
    },
    // catch block
    (error) => {
        if (error?.response) {
            const statusCode = error?.response?.status;
            if (statusCode >= 400) {
                const errorData: ApiError = error.response?.data;
                errorHandler[statusCode](errorData)
        } else {
          networkErrorStrategy()
        }
    }
  }
)

// CRUD opoerations
// api base
async function apiBase<T>(
    url: string,
    options?: AxiosRequestConfig
): Promise<T> {
    const response: AxiosResponse = await httpService(url,options);
    return response.data as T;
}



//CRUD (R)

async function readData<T>(
    url: string,
    headers?: AxiosRequestHeaders
): Promise<T> {
    const options: AxiosRequestConfig = {
        headers: headers,
        method: 'GET'
    }
    return await apiBase<T>(url, options);
}

async function createData<TModel, TResult> (
    url: string,
    data?: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers: headers,
        data: JSON.stringify(data)
    };

    return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult> (
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'PUT',
        headers: headers,
        data: JSON.stringify(data)
    };

    return await apiBase<TResult>(url, options);
}

async function deleteData(
    url: string,
    headers?: AxiosRequestHeaders
  ): Promise<void> {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      headers: headers,
    };
  
    return await apiBase(url, options);
  }

export{readData,createData,updateData,deleteData}
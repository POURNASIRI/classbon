'use server'

import { signInSchema } from "@/app/(auth)/signin/types/signin-schema"
import { redirect } from "next/navigation"

export async function signInAction(formState:{message:string}, formData:FormData){

    const mobile = formData.get('mobile')
    const validateData = signInSchema.safeParse({
        mobile
    })

    if(validateData.success){
        return {
            message:"شماره موبایل صحیح است"
        }
    }else{
        try {
            throw 'خطا در برقراری ارتباط با سرور'
        } catch (error) {
            return{
                message: error as string
            }
        }
    }
    console.log(mobile)
    redirect('/')
}
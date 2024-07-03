'use server'

import { signInSchema } from "@/app/(auth)/signin/types/signin-schema"
import { redirect } from "next/navigation"

export async function signInAction(mobile:string){

    const validateData = signInSchema.safeParse({
        mobile
    })

    if(validateData.success){
        console.log(mobile)
    }else{
        console.log('error')
    }
    console.log(mobile)
    redirect('/')
}
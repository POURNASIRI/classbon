 import NextAuth from "next-auth";
 import { authConfig } from "./auth.config";
 import CredentialsProvider from 'next-auth/providers/credentials'
import { VerifyUserModel } from "./app/(auth)/verify/types/verifi-user.types";
import { User } from "./types/user.types";
import { API_URL } from "./configs/global";
import { createData } from "./core/http-service/http-service";

 //چون ما یک اکسترنال ای پی ای داریم که به ما توکن می دهد بنابراین نیاز به یک کروندنشیال   پرووایدر داریم

 declare module 'next-auth'{
    interface User{
        accessToken : string
    }
 }

 export const {
    signIn,
    signOut,
    auth, // to achive our ssetion details 
    handlers:{
        GET,
        POST 
    }  // for achive our ssetion details from clinet component
 } = NextAuth({
        ...authConfig,
        providers:[   
            // یعنی هم میخواهیم احراز هویت کاستومک داشته باشیم و هم از طریق فیس بوک و گیت هاب به سیستم لاگین سویم

            CredentialsProvider({
                name:"credentials", //  نام برای دستررسی به این مدل از احراز هویت
                credentials:{ //  تعیین پارامتر هایی که میخواهیم احراز هویت را با انها انجیم دهیم
                    username:{label:"username", type:"text"},
                    code:{label:"code", type:"text"}
                },
                    // فانکش مهم که کرندنشیال ساخته شوده خود را به آن پاس میدهیم
                async authorize(credentials){
                    try{
                        const user = await createData<VerifyUserModel, User>(`${API_URL}/verify`,{
                            username:credentials.username as string,
                            code: credentials.code as string
                        })
                        return{
                            accessToken:user.token
                        }
                    }catch(error:unknown){
                        throw new Error('')
                    }
                }
            }

            )
        ]
 })
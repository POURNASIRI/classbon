"use client";

import { Button } from "@/app/_components/button/button";
import { SignIn } from "../types/signin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/form-input";
import { useSingIn } from "../api/signin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/store/notification.store";
import { useEffect } from "react";



const SignInForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<SignIn>();

    const router = useRouter()

    const showNotification  = useNotificationStore(state => state.showNotification)

    const signIn = useSingIn({
        onSuccess() {
            router.push(`/verify?mobile = ${getValues('mobile')}`)
            showNotification({
                message:"کد تایید به شماره شما ارسال شد",
                type:"success"
            })
        },
    })

    const onSubmit = (data:any) => {
        signIn.submit(data)
    }
    
    
    // note : when we use useNotification hook to prevent rerender component to change any our store
    // property we must use like this:
    // in this way the component just rerender when  showNotification has been change


    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">
                دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
            </p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SignIn>
                    // this property for register
                  register={register}
                  // this property for name
                  name={"mobile"}
                  // and rules property is an object for our validation
                  rules={{
                    required: 'شماره موبایل الزامی است',
                    maxLength: {
                        value: 11,
                        message: 'شماره موبایل باید 11 رقم باشد'
                      },
                      minLength: {
                        value: 11,
                        message: 'شماره موبایل باید 11 رقم باشد'
                      }
                  }}
                  // this property for gry errors
                  errors={errors}
                />

                <Button type="submit" isLoading={signIn.isPending} variant="primary">
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
};

export default SignInForm;
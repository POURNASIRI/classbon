
'use client'


import React, { FC, useEffect, useRef } from "react";
import { AuthCodeProps, AuthInputProps } from "./auth-code.types";
import classNames from "classnames";

const AuthCode: FC<AuthCodeProps> = ({
    variant= "ghost",
    autoFocus= true,
    className,
    isDisabled,
    length = 5,
    onChange

})=>{
    if(length < 1){
        throw new Error('تعداد ارقام باید بزرگتر از صفر باشد')
    }


    const inputsRef = useRef<Array<HTMLInputElement>>([]);
    // for definition events that cannot handle by react such as :
    // keyDown or focus we need Ref


    useEffect(()=>{
        if(autoFocus){
            inputsRef.current[0].focus()
        }
    },[autoFocus])

    const inputProps:AuthInputProps = {
        min : '0',
        max:'9',
        pattern: '[0-9]{1}' // number must be between 0-9 and must be written only once 
    }

    // functions
    const sendResult = ()=>{
        const result = inputsRef.current.map(input => input.value).join('')
        onChange(result)
    }

    const handleonChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            const {target:{value,nextElementSibling}} = e;
            // we cast nextElementSibling to HTMLinputElement for using focus property
            if(value.match(inputProps.pattern)){
                if(nextElementSibling !== null){
                    (nextElementSibling as HTMLInputElement).focus()
                }
            }else{
                e.target.value = ''
            }
            sendResult()
    }

    const handleOnFocus = (e:React.FocusEvent<HTMLInputElement>)=>{
        e.target.select();
    }

    const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
            const {key} = e
            const target = e.target as HTMLInputElement
            if(key === 'Backspace'){
                if(target.value === ''){
                    if(target.previousElementSibling !== null){
                        const priviouseElemnt = target.previousElementSibling as HTMLInputElement
                        priviouseElemnt.value = ""
                        priviouseElemnt.focus()
                    }
                }
            }else{
                target.value = ""
            }
            sendResult()
    }

    const classes = classNames("textbox flex-1 w-1 text-center",{
        [`textbox-${variant}`]:variant,
    })

    const inputs = [];
    for(let i = 0; i < length; i++){
        inputs.push(
            <input
            className={classes}
            type="text"
            maxLength={1}
            disabled={isDisabled}
            onChange={handleonChange}
            onFocus={handleOnFocus}
            onKeyDown={handleOnKeyDown}
            // we use function in ref because we are in the loop
            ref={
                (element: HTMLInputElement) =>{
                    inputsRef.current[i] = element
                }
            }
            />
        )
    }


    return(
        <div  className={`flex gap-4 flex-row-reverse`}>
            {
                inputs
            }
        </div>
    )
}

export default AuthCode
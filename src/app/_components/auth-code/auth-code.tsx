
'use client'


import { FC, useRef } from "react";
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


    const inputProps:AuthInputProps = {
        min : '0',
        max:'9',
        pattern: '[0-9]{1}' // number must be between 0-9 and must be written only once 
    }

    // functions
    const sendResult = ()=>{

    }

    const handleonChange = ()=>{

    }

    const handleOnFocus = ()=>{

    }

    const handleOnKeyDown = ()=>{

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
        <div className={`flex gap-4 flex-row-reverse`}>
            {
                inputs
            }
        </div>
    )
}

export default AuthCode
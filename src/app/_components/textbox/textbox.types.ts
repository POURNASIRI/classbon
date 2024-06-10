import { InputHTMLAttributes } from "react"
import { ComponentBase } from "../types/component-base.type"

type TextboxType = 'text' | "number" | "email" | "password"


//we use Omit to remove  defualt size property in HTML Input attributes
export type TextboxProps = Omit <InputHTMLAttributes<HTMLInputElement>,'size'> & ComponentBase & {
    type?:TextboxType
}



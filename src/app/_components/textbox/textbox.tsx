import classNames from "classnames";
import { Size } from "../types/size.type";
import { TextboxProps } from "./textbox.types";
import { forwardRef } from "react";


const SizeClasses :Record<Size,string> = {
    tiny:"textbox-xs",
    small:"textbox-sm",
    normal:"textbox-md",
    large:"textbox-lg",
}
// forwardRef is a function that take two parameters so we use two types for that, one 
// is our refrence type and two is our component type 
export const TextBox:React.FC<TextboxProps> =forwardRef<HTMLInputElement,TextboxProps> (({
    variant = 'ghost',
    type = "text",
    className,
    size = "normal",
    ...rest
}, ref)=>{
    const classes = classNames(
        "textbox",
        "w-full",
        className,
        { [`textbox-${variant}`]: variant },
        { [`${SizeClasses[size]}`]: size }
    );
    return <input ref={ref} type={type} className={classes} {...rest}/>;
})
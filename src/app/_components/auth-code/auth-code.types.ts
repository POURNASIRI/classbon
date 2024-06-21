import { ComponentBase } from "../types/component-base.type";

export type AuthCodeProps = Omit<ComponentBase, 'size'> & {
    autoFocus?:boolean;
    length?:number;
    onChange:(value:string)=>void
}


export type AuthInputProps = {
    min?:string;
    max?:string;
    pattern:string // To limit the user to enter the numbers 0 to 9
}


export type AuthCodeRef = {
    focus:()=>void;
    clear:()=>void;
}

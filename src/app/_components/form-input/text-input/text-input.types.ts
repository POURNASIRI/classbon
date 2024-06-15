import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { TextboxProps } from "../../textbox/textbox.types";

//Note : this type must be generic because we dont know our input types

// our generic type name well be TFormValues that this type extends from FieldValues Type from react hook form
// fieldValues is a type base on key value [x: string]: any; 

// we must Omit Textboxprops for remove this name property that we can set TextInputProps name 
export type TextInputProps<TFormValues extends FieldValues> = Omit<TextboxProps, 'name'> & {
    register: UseFormRegister<TFormValues>, // must be generic types
    name: Path<TFormValues>, 
    rules?: RegisterOptions
    // partial type convert all required property in a type to optional
    errors: Partial<DeepMap<TFormValues, FieldError>>
}
import { FieldValues, get } from "react-hook-form";
import { TextBox } from "../../textbox";
import { TextInputProps } from "./text-input.types";


const TextInput = <TFormValues extends FieldValues>({
    name,
    register,
    errors,
    variant,
    ...rest
}: TextInputProps<TFormValues>) => {
    // for get method from rect hook form we can get error for each fields 
// get method get two parameters errors and name 
    const error = get(errors, name);
    // to detect is error appear or not
    const hasError = !!error;
    return (
        <>
            <TextBox
                {...register(name)}
                {...(hasError ? { variant: "error" } : { variant: variant })}
                {...rest}
            />
            {
                hasError && (
                    <p className="mt-1 text-sm text-error">
                        {error.message}
                    </p>
                )
            }
        </>
    );
};

export default TextInput;
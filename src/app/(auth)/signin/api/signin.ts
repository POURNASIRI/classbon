// import { createData } from "@/core/http-service/http-service";
// import { SignIn } from "../types/signin.types";
// import { useMutation } from "@tanstack/react-query";


// const signIn = (model:SignIn):Promise<void> => createData<SignIn,void>("/signin", model)


// type UseSignInOptions = {
//     // use onSuccess function that when user lofin we can lead user to another route in the other hande we use this function to detect signin operation
//     onSuccess?:()=>void;
// }


// export const useSingIn = ({onSuccess}:UseSignInOptions)=>{
//     //we use mutate when we want our mutaion start whit click button  
//     const {mutate:submit,isPending} = useMutation({
//         mutationFn:signIn,
//         onSuccess:onSuccess
//     })
//     return{
//         submit,
//         isPending
//     }
// }
    

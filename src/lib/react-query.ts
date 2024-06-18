
import { Problem } from "@/types/http-errors.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { Notification } from "@/types/notification.interface";
import { showNotification } from "@/store/notification.store";



export const queryClient = new QueryClient({

    queryCache:new QueryCache({
        onError:(error)=>{
           // show errors notification 
        }
    }),

    mutationCache:new MutationCache({
        // we set error type as unkown until we should casd it to problem type
        onError:(error: unknown)=>{
            // show errors notification
            showNotifications(error as Problem)
            
        }
    }),



    defaultOptions:{
        queries:{
            retry:false,   // when request failed we dont want refetch again// 

            refetchOnWindowFocus:false,   // when browser close or minimize or we chage browser tab and comeback again to the tab 
            // react query refech again to get fresh data//
            
            throwOnError:false,   // we dont want use default react query error handling//
            
            gcTime: 1000 * 60 * 60 * 24  //time that react query catch our fetch //
        }
    }
}) 


const showNotifications = (problem:Problem)=>{
    const notifications:Omit<Notification, 'id'>[] = [];

    if(problem.errors){
        // becuse error is an object we use Object.entrise to loop our object keys
        Object.entries(problem.errors).forEach(([_,values])=>(
            values.forEach((errorMessage)=>(
                notifications.push({
                    message: errorMessage,
                    type:"error"
                })
            ))
        ))

    }else if(problem.detail){
        notifications.push({
            message: problem.detail,
            type:"error"
        })
    }

    showNotification(notifications);
}
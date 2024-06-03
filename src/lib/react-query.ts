import { QueryCache, QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient({

    queryCache:new QueryCache({
        onError:(error)=>{
           // show errors notification 
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
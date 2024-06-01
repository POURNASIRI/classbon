import { QueryCache, QueryClient } from "react-query";

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
            
            useErrorBoundary:false,   // we dont want use default react query error handling//
            
            cacheTime: 1000 * 60 * 60 * 24  //time that react query catch our fetch //
        }
    }
}) 
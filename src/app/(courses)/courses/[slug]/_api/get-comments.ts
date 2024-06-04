//custom hook for fetch comment


import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comments.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";




// 1 defiend type for our fetch
type GetCommentsOptions = {
    params:{
        slug:string;
        page:number
    }
}
// 2-  defiend function that use our httpService 
const getComments = ({
    params
}:GetCommentsOptions):Promise<CourseCommentList> =>{
    const{slug,page} = params
    const url = `/courses/${slug}/comments?page=${page}`;
    return readData(url)
}


// 3-defiend custom hook function
export const UseCourseComments = ({params}:GetCommentsOptions)=>{
   const {data,error,isFetchingNextPage,fetchNextPage,hasNextPage,refetch} =  useInfiniteQuery({
        // defiend key for catch comment data
        // use params.slug to create uniqe cache for each course
        queryKey:['courseCommnets',params.slug],
        //function to get data
        // when we use useInfinitQuery our parameter well be deffrent from  use Query
        //1- we must use pageParam for our query Fn and add it as page in params 
        queryFn:({pageParam })=>getComments({params:{...params, page:pageParam}}),
        //2- use getNextPageParam and add lasepage in this input to get our next page
        getNextPageParam:(lastPage)=> lastPage.nextPage,
        //3 set initialPageParam property 
        initialPageParam:1,
        staleTime:5 * 60 * 60 * 100,
        gcTime:6 * 60 * 60 * 100,
    })
    return{data,error,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch};

}
 
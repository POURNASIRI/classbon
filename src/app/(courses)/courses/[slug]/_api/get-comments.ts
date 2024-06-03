//custom hook for fetch comment


import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comments.interface";
import { useQuery } from "@tanstack/react-query";



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
   const {data,isLoading} =  useQuery({
        // defiend key for catch comment data
        queryKey:['courseCommnets'],
        //function to get data
        queryFn:()=>getComments({params}),
        staleTime:5 * 60 * 60 * 100,
        gcTime:6 * 60 * 60 * 100,
    })
    return{data,isLoading};

}
 
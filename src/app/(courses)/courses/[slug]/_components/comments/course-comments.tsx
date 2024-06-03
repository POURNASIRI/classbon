'use client'

import { useParams } from "next/navigation"
import { UseCourseComments } from "../../_api/get-comments"
import { Comment } from "@/app/_components/comment"
import { TextPlaceholder } from "@/app/_components/placeholders/text/text-placeholder"





const CourseComments = ()=>{
    const {slug} = useParams()
  const{data: comments, isLoading} =  UseCourseComments({
        params:{
            slug:slug as string,
            page:1
        }
    })

    return(
        <>
            {
                comments?.data.map(comment =>(
                    <Comment key={`comment-${comment.id}`} {...comment} variant="info"/>
                ))
                
            }
            {
                isLoading && <TextPlaceholder/>
            }
        </>
    )
}

export default CourseComments
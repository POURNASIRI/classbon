'use client'

import { useParams } from "next/navigation"
import { UseCourseComments } from "../../_api/get-comments"
import { Comment } from "@/app/_components/comment"
import { TextPlaceholder } from "@/app/_components/placeholders/text/text-placeholder"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/_components/button"
import { IconRefresh } from "@/app/_components/icons/icons"





const CourseComments = ()=>{
    const {ref,inView} = useInView({})
    const {slug} = useParams()
  const{data: comments, error,fetchNextPage,hasNextPage,isFetchingNextPage,refetch,isFetching} =  UseCourseComments({
        params:{
            slug:slug as string,
            page:1
        }
    })
    
    useEffect(()=>{
        //in view true means element enter in viewPort and we have nextPage too
        if(inView && hasNextPage){
            fetchNextPage()
        }
    },[inView,fetchNextPage,hasNextPage])


    if(error){
        return (
            <>
            <p>خطا در برقراری ارتباط با سرور</p>
            <div className="text-center mt-3">
                <Button 
                variant="neutral"
                className="font-semibold"
                isOutline={true}
                shape="wide"
                //we can call refetch function from react Query in this button  
                onClick={()=>refetch()}
                >
                    <IconRefresh/>
                    تلاش مجدد
                </Button>
            </div>
            </>
        )
    }

    return(
        <>
           {
                comments?.pages.map((currentPage)=>(
                    <Fragment key={`comment-page-${currentPage}`}>
                            {
                                currentPage.data.map(comment=>(
                                    <Comment key={`comment-${comment.id}`} {...comment} variant="info"/> 
                                ))
                            }
                    </Fragment>
                )) 
           }
           {/* we can use ref to track last element in view port  to fetch next page */}
           {
           //{/* when we have isFetchingNextPage or hasNextPage show our placeholder */}
            (isFetching || hasNextPage) &&
            <div ref={ref}>
            <TextPlaceholder/>
            </div> 
           }
          
                    
              
                
           
        </>
    )
}

export default CourseComments
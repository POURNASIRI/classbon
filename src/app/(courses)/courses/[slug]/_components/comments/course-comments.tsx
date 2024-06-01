'use client'

import { createData, readData } from "@/core/http-service/http-service"
import { useEffect } from "react"

const CourseComments = ()=>{
    useEffect(()=>{
        createData('/bad-request')
    },[])
    return(
        <>
        </>
    )
}

export default CourseComments
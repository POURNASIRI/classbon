export interface CourseComment {
    id:number;
    data:string;
    userId:number | undefined;
    fullName:string;
    commentText:string;
    score:number | null;
    isResponse: boolean
}


export interface CourseCommentList {
    data:CourseComment[];
    nextPage:number
}
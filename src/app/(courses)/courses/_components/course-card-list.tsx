import { CourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card";



type CourseCardListProps = {
    courses: CourseSummary[];
}

async function GetNewestCourses(count:number): Promise<CourseSummary[]> {
    // Note: this fetch is server side fetch becouse this component
    //  is server component.
    //NOTE 1-
    // next.js cash this URL if need use this url and function in another page
    // just need copy this function and passed in specific component 
    // in next.js hole the application this function just call one time
    await new Promise ((resolve)=>setTimeout(resolve,5000));
    const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`,{
      next:{
        revalidate:24 * 60 * 60    //24h
      }
    });
    return res.json();
    // NOTE 2-
    // response of this function also cash in next.js data chashing in server side
    // when we navigate another page and return to uome page in this time 
    // response read from chash and dont fetch again from database expect when our 
    // data be going revalidate
}


export const CourseCardList: React.FC<CourseCardListProps> = async({courses}:CourseCardListProps)=>{
            
    const newestCoursesData = await  GetNewestCourses(4)

    return(
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
            {
                newestCoursesData.map((course)=>(
                    <CourseCard key={`course-${course.slug}`} {...course}/>
                ))
            }
        </div>
    )
}
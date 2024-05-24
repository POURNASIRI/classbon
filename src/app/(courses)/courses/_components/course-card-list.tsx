import { CourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

async function getNewestCourses(count:number): Promise<CourseSummary[]> {

    await new Promise((resolve)=>setTimeout(resolve,5000));
    const res = await fetch(`${API_URL}/courses/newest/${count}`,{
      cache:'no-store',
      next:{
        revalidate:24 * 60 * 60    //24h
      }
    });
    return res.json();

}

type CourseCardListProps = {
    courses: CourseSummary[];
}

export  const  CourseCardList: React.FC<CourseCardListProps> = async ({courses}:CourseCardListProps)=>{

    const newestCoursesData = await getNewestCourses(4)
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
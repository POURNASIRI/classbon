
import { CourseSummary } from "@/types/course-summery.interface";
import {HomeHeroSection} from "./_components/home-hero-section/home-hero-section";



async function getNewestCourses(count:number):Promise<CourseSummary[]>{
    const res  = await fetch(`https://api.classbon.com/api/courses/newest/${count}`,
      {
        next:{
          revalidate: 24 * 60 * 60
        }
      });
    return res.json()
}


export default async function Home() {

   const newestCourses = await getNewestCourses(4 )
  return (
    <>
     <HomeHeroSection/>
    </>
  );
}
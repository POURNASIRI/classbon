import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section";
import { CourseCardList } from "./(courses)/courses/_components/course-card-list";
import {IconArrowLeftFill, IconClock} from './_components/icons/icons'
import { homeFeatures } from "@/data/home-feature";
import Feature from "./_components/feature/feature";
import { Button } from "./_components/button";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCardList } from "./(blog)/_components/blog-post-card-list";


async function GetNewestCourses(count:number): Promise<CourseSummary[]> {
      // Note: this fetch is server side fetch becouse this component
      //  is server component.


      //NOTE 1-
      // next.js cash this URL if need use this url and function in another page
      // just need copy this function and passed in specific component 
      // in next.js hole the application this function just call one time
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
async function GetNewestPosts(count:number): Promise<BlogPostSummary[]> {

  const res = await fetch(`https://api.classbon.com/api/blog/newest/${count}`,{
    next:{
      revalidate:24 * 60 * 60    //24h
    }
  });
  return res.json();

}


// Note Static Rendering (read Readme file )

export default async function Home() {

  const newestCoursesData = await GetNewestCourses(4)
  // const newestBlogPostdata =  GetNewestPosts(4)

// NOTE 
//  const[newestCourses,newestBlogPost] = await Promise.all([newestCoursesData,newestBlogPostdata])
// console.log(newestBlogPost)

  return (
      <>
          <HomeHeroSection/>
          <section className="dark:bg-base-75 mt-10">
              <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5 px-20">
                {
                  homeFeatures.map((feature)=>(
                    <Feature key={feature.title} feature={feature}/>
                  ))
                }
              </div>
          </section>
          <section className="container p-2 px-20">
            <div className="text-center xl:text-right">
              <h2 className="text-2xl font-extrabold">
                تازه ترین دوره های آموزشی
              </h2>
              <p>
                برای بروز موندن، یاد گرفتن نکته های تازه ضروریه
              </p>
            </div>
            <CourseCardList courses={newestCoursesData}/>
          </section>
          <section className="px-2 my-40">
                {/* <div className="sticky top-0 pt-0 text-center"> */}
                <div className="relative pt-0 text-center">
                    <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

                    <h2
                        lang="en"
                        className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
                    >
                        ReactJs & Next.js
                    </h2>
                    <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
                        ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و
                        یکه‌تاز دنیای وب! پیشرفته‌ترین مباحث رو اینجا می تونی
                        پیدا کنی. پس همین الان یادگیری رو شروع کن ما هم از
                        ابتدای مسیر با آموزش‌های تخصصی و کاملاً کاربردی کنارت
                        هستیم.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
                        <Button
                            variant="primary"
                            size="large"
                            className="mt-7"
                            animatedIcon={true}
                        >
                            دوره‌های ری اکت و نکست‌ جی‌اس
                            <IconArrowLeftFill fill="currentColor" />
                        </Button>
                        <Button
                            variant="neutral"
                            size="large"
                            className="mt-7"
                            animatedIcon={true}
                        >
                            مقالات ری اکت و نکست‌ جی‌اس
                        </Button>
                    </div>
                </div>
            </section>
            <section className="container py-20 px-20">
                <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
                    <div className="text-center xl:text-right">
                        <h2 className="text-2xl font-extrabold">
                            تازه‌ترین مقاله‌های آموزشی
                        </h2>
                        <p className="mt-3 text-lg">
                            به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در
                            اختیارت می‌ذاریم؛ چون پیشرفتت برامون مهمه!
                        </p>
                    </div>
                    <Button
                        variant="neutral"
                        className="font-semibold"
                        animatedIcon={true}
                    >
                        همه مقاله‌ها
                        <IconArrowLeftFill fill="currentColor" />
                    </Button>
                </div>
                <BlogPostCardList posts={[]}/>
            </section>

      </>
  );
}

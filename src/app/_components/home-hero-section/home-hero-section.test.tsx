import { describe } from "node:test";
import { HomeHeroSection } from ".";
import { render } from "@testing-library/react";


describe("HomeHeroSection Component", ()=>{

    test('display the home hero section', ()=>{
       const {container}=  render(<HomeHeroSection/>); //container is an output for HomeHeroSection component
       expect(container).toMatchSnapshot(`
       <section className="bg-hero-pattern px-40 bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left ">
       <div className="container flex flex-col-reverse items-center xl:flex-row ">
         <div className="flex flex-col gap-5 mt-12 pb-5 text-center
         xl:text-right">
           <h3 className="text-xl dark:text-info xl:text-2xl">
             خوش آومدی به ....
           </h3>
           <h1 className="text-3xl font-black gradient lg:text-5xl xl:text-5xl ">مسیر صعود به قله های برنامه نویسی</h1>
           <p>
             هرجای مسیر برنامه نویسی که باشی با همراهی استادهای 
             با تجربه کلاسبن می تونی بدون محدودیت به قله های بالاتر 
             صعود کنی ،ما همیشه هواتو داریم
           </p>
           <div className="mt-5 flex gap-4">
               <Button variant="primary" size="large">دوره های ری اکت و نکست</Button>
               <Button variant="neutral" size="large">مشاوره برنامه نویسی</Button>
           </div>
           <Image src="/images/frameworks.png"
           className="grayscale mt-4 m-auto opacity-70 xl:m-0" 
           width={412} height={39} alt=""/>
         </div>
         <Image className="" src='/images/programmer-landing.svg'
         width={702} height={512} alt="کلاسبن"/>
       </div>
     <div className="container">
     </div>
     </section>
       `)
    })
})
import Image from "next/image"
import { TopNavigation } from "./top-navigation"


export const Header: React.FC = () =>{
     return(
        <header className="border-b px-20 dark:border-base-content dark:border-opacity-5">
            <div className="flex items-center justify-between container ">
               <Image src='/images/logo-light.svg'
               width={100}
               height={36}
               alt="کلاسبن"
               />
               <TopNavigation/>
               <span className="mr-auto">Athentication</span>
            </div>
        </header>
     )   
}
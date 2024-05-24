'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems:NavigationMenuItem[]=[
    {
        title:"صفحه اصیلی", href:"/"
    },
    {
        title:"دوره های ری اکت و نکست", href:"/courses"
    },
    {
        title:"مطالب و مقالات", href:"/blog"
    },

]

export const TopNavigation: React.FC = ()=>{


    // for show active link
    const pathname = usePathname()
   




    return(
        <ul className="flex gap-x-8 mr-12">
            {
               menuItems.map((items)=>{

                // for show active link
                const isActive = pathname === items.href 

                return(
                    <li key={items.title}>
                        <Link href={items.href} className={`dark:hover:text-primary transition-colors pb-2 
                        ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30'}`}> 
                            {items.title}
                        </Link>
                    </li>
                )
               })
                
            }
        </ul>
    )
}

// 30 after color means opacity
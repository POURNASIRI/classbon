'use client'
import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

// we use lang attribute for this component 
// becuase we want this components use figtree font 
// as defualt font


const getTextColor = (backgroundColor:string):string=>(
    colord(backgroundColor).isDark() ? "#ddddd" : "#333333"
)

export const Colors :React.FC = () =>(
    <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
            {
                Object.entries(tailwindColors).map(([name,color])=>(
                    <ColorBox key={name} color={color} name={name}/>
                ))
            }
    </div>
)


const ColorBox :React.FC<{name:string, color:string}> = ({name,color}) =>(
   <div className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
   style={{backgroundColor:color, color:getTextColor(color)}}>
    <span>{name}</span>
    <span>{color}</span>
   </div>
)


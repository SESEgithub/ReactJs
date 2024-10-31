import  { FaRegCircle } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import {useEffect, useState} from "react";
export default function Header() {
    const [theme,setTheme] = useState( JSON.parse(localStorage.getItem("theme"))|| "bg-amber-200");
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    },[theme])
    return (
        <div className="h-20 w-screen bg-cyan-300 flex flex-row justify-around">
           <span className={" text-6xl"}><FaTasks /> </span>
            <div className={"flex flex-col lg:flex-row space-x-10" }>
                <span className={"capitalize  text-2xl lg:text-4xl"}>welcome to this todo app</span>
                <span className={"flex flex-row space-x-1 mt-6"}>
                    <  FaRegCircle onClick={()=>setTheme("bg-white")} className={" text-2xl bg-white rounded-full md:text-4xl"}/>
                     <  FaRegCircle onClick={()=>setTheme( "bg-amber-200")} className={" text-2xl bg-amber-200 rounded-full md:text-4xl"}/>
                    <  FaRegCircle onClick={()=>setTheme("bg-rose-300")} className={" text-2xl bg-rose-300 rounded-full md:text-4xl"}/>
                    <  FaRegCircle onClick={()=>setTheme("bg-gray-300")} className={" text-2xl bg-gray-300 rounded-full md:text-4xl"}/>
                    <  FaRegCircle onClick={()=>setTheme("bg-green-200")} className={" text-2xl bg-green-200 rounded-full md:text-4xl"}/>
                    <  FaRegCircle onClick={()=>setTheme("bg-blue-300")} className={" text-2xl bg-blue-300 rounded-full md:text-4xl"}/>

                </span>
            </div>
        </div>
    )
}
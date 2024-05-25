import { Link, NavLink } from "react-router-dom";
import React from "react";
import img1 from "../assets/react.svg"

export default function Navar(props){
    return(
     <header className=" text-white     h-screen relative">
       

       <div className="flex justify-center items-center h-full w-full  bg-black  absolute z-[-1]">
        <img className="lg:h-1/2 lg:w-1/2 h-1/3 w-1/3" src={img1}/>
        </div>
        
        <nav className="flex flex-row  px-12 py-4 items-center justify-between ">
        <h1 className="text-5xl font-semibold ">
      React
    </h1>
                <ul className="flex flex-row items-center text-2xl">
                    <li className="px-3 mx-3 cursor-pointer">
                        <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li className="px-3 mx-3 cursor-pointer">
                        <NavLink to={'/Hooks'}>Hooks</NavLink>

                        </li>
                        <li className="px-3 mx-3 cursor-pointer">
                        <NavLink to={'/more'}>more</NavLink>
                            
                    </li>
                </ul>
        </nav>
        <div className="h-4/5 w-full absolute to-black via-[#0000007b] from-[#0000002f]  bg-gradient-to-b flex items-end  justify-center">
            <h1 className="text-6xl border border-white rounded-full px-12 py-3 hover:bg-white hover:text-black cursor-pointer mb-4">
                {props.data}
            </h1>
        </div>
        
        

     </header>
    )
}
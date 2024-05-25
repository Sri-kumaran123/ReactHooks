import { useState } from "react";
export default function useSt(){
    const [count,setCount]=useState(0);
    const [change,setChange]=useState(0);

    function add(){
        for(let i=-1;i<change;i++){
            setCount((state)=>state+1)
        }
    }
    function min(){
        for(let i=-1;i<change;i++){
            setCount((state)=>state-1)
        }
        
    }
    function ch(e){
        setChange(e.target.value);
    }
    return(
        <div className=" text-white flex flex-col p-12">
            {console.log('render')}
         <div className="m-6 rotate-3 font-bold">
                <h1 className="text-8xl">
                    Counter
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly xl:px-40 xl:gap-40">
            <div className="mt-20  bg-white base-1 text-black flex flex-col justify-center rounded-lg relative md:w-full">
                <button onClick={add}className="m-10 p-6 bg-green-700 rounded  text-3xl text-white ml-[50%] rotate-2 hover:bg-green-950">add</button>
                <span className="text-9xl absolute h-full flex items-center pl-14">{count}</span>
                <input className="border w-4/5 absolute bg-white top-[-20px] text-3xl rounded focus:border-b-2 lg:w-2/3 xl:w-1/3 p-3" type="text" value={change} onChange={ch}/>
                <button onClick={min} className="m-10 p-6 bg-red-700 rounded  text-3xl text-white ml-[50%] -rotate-12 hover:bg-red-950">minus</button>
            </div>
            <div className="p-5 m-7 base-1 md:w-full border border-white rounded-lg bg-[#f8f5f530]">
                <div>
                    <h1 className="text-5xl">useState</h1>
                </div>
                <div>
                <p className="text-2xl">useState is a React Hook that lets you add a state variable to your component.Step-by-Step Explanation:

The useState hook is a built-in function in React that allows you to manage state in functional components.
The useState hook takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it.
You can use array destructuring to assign names to these elements, such as [count, setCount] in this example.
.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
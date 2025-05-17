import { useCallback, useEffect, useState } from "react";

function Passw(){

    return (

        <>
            <div id="container" className="border p-8 md:p-10 rounded-lg bg-orange-500 ">

                <div 
                id="password-gen"
                className="md:flex md:flex-row flex flex-col  items-center gap-10 mb-5"
                >
                    <h1 className="text-2xl font-medium">Genarate your password</h1>
                    
                    <div 
                    id="input-con" 
                    className=" flex "
                    >
                        <input 
                        type="text"
                        className="border p-1.5 focus:outline-none"
                        placeholder="Get your password"
                        readOnly
                         />
                        <button 
                        className="p-1.5 w-[90px] bg-black font-bold text-white hover:bg-blue-950 duration-150"
                        >Generate</button>
                    </div>

                </div>
                <div 
                id="options"
                className="flex items-center justify-around"
                >
                    <div id="rang-con">
                        <input 
                        id="length"
                        type="range"
                        name="length"
                        min="7"
                        max="20"
                        className="cursor-pointer mr-2 md:w-[250px]"
                        />    
                        <span className="text-lg ml-2">5</span>
                    </div>

                   <div 
                    id="number-check"
                    className="flex gap-2 items-center">
                     <input 
                        type="checkbox"
                        id="numberActive"
                        className=""
                    />
                    <label className="md:text-lg text-sm">number</label>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Passw;
import { useCallback, useEffect, useState } from "react";

function Passw(){

    const [value,setValue] = useState(5);
    const [numberActive,setNumberActive] = useState(false);
    const [password,setPassword] = useState('');
    
    const rangeHandle = useCallback((e)=>{
        setValue(e.target.value);
    },[value]);


    const numberCheck = () => {
        setNumberActive(!numberActive);
    };
    
    const passworGenarator = () =>{
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        let newPassoword = '';
        for(let i = 0; i < value ; i++){
            console.log(value)
            let passChar = Math.floor(Math.random() * characters.length);
            newPassoword += characters[passChar];
        }
        setPassword(newPassoword);
        console.log(password)
    }
    
    useEffect(()=>{
        passworGenarator();
    },[])
    return (

        <>
            <div id="container" className="border p-8 md:p-10 rounded-lg bg-orange-500 ">

                <div 
                id="password-gen"
                className="md:flex flex flex-col  items-center gap-10 mb-5"
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
                        onClick={passworGenarator}
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
                        onChange={rangeHandle}
                        className="cursor-pointer mr-2"
                        />    
                        <span>{value}</span>
                    </div>

                   <div 
                    id="number-check"
                    className="flex gap-2 items-center">
                     <input 
                        type="checkbox"
                        id="numberActive"
                        className=""
                        checked = {numberActive}
                        onChange={numberCheck}
                    />
                    <label>number</label>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Passw;
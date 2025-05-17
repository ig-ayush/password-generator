import { useCallback, useEffect, useState } from "react";

function Passw(){

    const [length,setLength] = useState(13);
    const [isNumber,setIsNumber] = useState(false);
    const [password,setPassword] = useState('');
    const [copyBtn,setCopyBtn] = useState('Copy')
    const getLength = (e) =>{
        setLength(e.target.value);
    }

    const checkNum = () =>{
        if(isNumber){
            setIsNumber(false);
        }else{
            setIsNumber(true);
        }
    }

    const genaratePassword = () =>{
        let passCharacters = "abcdefghijklmnopqstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let tempPass = '';
        if(isNumber) passCharacters += "0123456789";

        for(let i = 0; i < length; i++){
            let passChar = Math.floor(Math.random() * passCharacters.length);
            tempPass += passCharacters[passChar];
        }

        setPassword(tempPass);

    }

    const copy = ()=>{
        if(password){

            navigator.clipboard.writeText(password)
            setCopyBtn("Copied");

            setTimeout(() => {
                setCopyBtn("Copy");
            }, 2000);
        }
    }
    
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
                        value={password}
                         />
                        <button 
                        className="p-1.5 w-[90px] bg-black font-bold text-white hover:bg-blue-950 duration-150"
                        onClick={genaratePassword}
                        >Generate</button>
                    </div>
                </div>
                <div 
                id="options"
                className="flex items-center justify-around flex-col md:flex-row gap-5 "
                >
                    <div id="rang-con">
                        <input 
                        id="length"
                        type="range"
                        name="length"
                        min="5"
                        max="20"
                        className="cursor-pointer mr-2 md:w-[250px]"
                        onChange={getLength}
                        />    
                        <span className="text-lg ml-2">{length}</span>
                    </div>
                   <div 
                    id="number-check"
                    className="flex gap-2 items-center">
                     <input 
                        type="checkbox"
                        id="numberActive"
                        onClick={checkNum}
                    />
                    <label className="text-lg">number</label>

                   </div>
                    <button 
                    className="p-1.5 w-[90px]  bg-black font-bold text-white hover:bg-blue-950 duration-150" 
                    onClick={copy}
                    >{copyBtn}</button>
                </div>
            </div>
        </>
    )
}

export default Passw;
function Passw(){
    return (
        <>
            <div id="container" className="border p-10 rounded-lg bg-orange-500 ">

                <div 
                id="password-gen"
                className="flex items-center gap-10"
                >
                    <h1 className="text-2xl font-medium">Genarate your password</h1>
                    
                    <div 
                    id="input-con" 
                    className=" flex "
                    >
                        <input 
                        type="text"
                        className="border p-1.5 focus:outline-none"
                         />
                        <button 
                        className="p-1.5 w-[90px] bg-black font-bold text-white hover:bg-blue-950 duration-150"
                        >Generate</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Passw;
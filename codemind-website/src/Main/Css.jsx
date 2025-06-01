const Css = () =>{
    return(
        <>
        <div className="bg-slate-500">
         <div className="text-xl flex justify-center items-center h-20 bg-sky-400 text-white font-bold">
            <h1 >Important Topics Of CSS  . . . </h1>
         </div>
        <div className="  relative w-full max-w-4xl mx-auto " >
           
          <img src="background1.jpg" className=" w-[900px] h-[900px]  "/>
            
            <ul className="bg-pink-950 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-black text-lg space-y-2 bg-white bg-opacity-70 p-4 rounded-md shadow-lg">
                <li>Box model</li>
                <li>Background</li>
                <li>CSS properties</li>
                <li>Flexbox</li>
                <li>Colors</li>
                <li>CSS selectors</li>
                <li>Media Queries</li>
                <li>CSS frameworks</li>
                <li>Padding</li>
                <li>Margines</li>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Css;
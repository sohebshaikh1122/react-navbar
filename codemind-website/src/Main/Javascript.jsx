import React from 'react'

const Javascript = () => {
  return (
    <>
    <div className='bg-slate-500 h-screen text-white '>
      <img src="javascript.png" alt=""className='h-40  pt-12 pl-14 ' />
         <div className='flex justify-content-center'>
          <div>
            <h1>=========================================================</h1>
          </div>
        <div>
            <div className='text-center mt-10'>
              <h1 className='text-3xl font-bold '>JavaScript</h1>
            </div>
        
            <p className='text-left text-base font-bold mt-10  mr-10 ml-auto'>
            JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive and dynamic.
             It was developed by Brendan Eich in 1995 and has since become one of the core technologies of the web, alongside HTML and CSS. 
             Originally designed to run in browsers, JavaScript can now also run on servers using environments like Node.js. 
             It follows the ECMAScript specification and supports various programming paradigms including object-oriented, imperative, and functional styles.
             Variables in JavaScript can be declared using var, let, or const, and it is known for being dynamically and loosely typed.
             Functions are treated as first-class objects, meaning they can be stored in variables, passed as arguments, and returned from other functions. 
             One of JavaScript’s main roles in web development is manipulating the DOM (Document Object Model), allowing developers to change content and structure on the fly.
            </p>
          </div>
         </div>
           <div>
              <video src="javascript1.mp4" controls autoPlay className='h-60 pl-14 pb-14'></video>
          </div>
    </div>
    
    </>
  )
}

export default Javascript

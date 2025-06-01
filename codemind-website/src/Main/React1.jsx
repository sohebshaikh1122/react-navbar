import React from 'react'

const React1 = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition" >
        React Topics . . .
      </button> <br />
      <button className="bg-green-600 text-white px-6 py-2 ml-80 rounded hover:bg-green-700 "
        onClick={() => window.open('https://react.dev/reference/react/hooks', '_blank')}>
        Hooks Documentation
      </button> <br />
      <div className="flex justify-center items-center ">
        <button className="bg-green-600 text-white px-6 py-2 ml-60 rounded hover:bg-green-700 "
        onClick={() => window.open('https://legacy.reactjs.org/docs/components-and-props.html', '_blank')}>
        React Props
      </button>
      </div><br />
      <div className="flex justify-end items-end ">
        <button className="bg-green-600 text-white px-6 py-2  rounded hover:bg-green-700 "
        onClick={() => window.open('https://legacy.reactjs.org/docs/react-component.html', '_blank')}>
        React Components
      </button>
      </div><br />
      <div className="flex justify-center items-center ">
        <button className="bg-green-600 text-white px-6 py-2 ml-60 rounded hover:bg-green-700 "
        onClick={() => window.open('https://legacy.reactjs.org/docs/faq-internals.html', '_blank')}>
        React Virtual DOM
      </button><br />
      </div>
      <button className="bg-green-600 text-white px-6 py-2 ml-80 rounded hover:bg-green-700 "
        onClick={() => window.open('https://www.w3schools.com/react/react_router.asp', '_blank')}>
        React Router
      </button> <br />
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 "
        onClick={() => window.open('https://legacy.reactjs.org/docs/optimizing-performance.html', '_blank')}>
        Performance Optimization
      </button> <br />
      <h1>================================================================================================================================================</h1>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold font-mono text-white'>
          Thank you for visiting the React section of our website! 
        </h1>
      </div>
    </div>
  )
}

export default React1

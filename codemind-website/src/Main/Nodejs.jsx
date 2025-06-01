import React from 'react'

const Nodejs = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
        
         <table  className='border-8 rounded   bg-amber-700 p-2 w-[400px] h-[250px]'>
          <caption className='text-2xl font-bold text-white'>Using NODE JS we save data in DATABASE</caption><br />
          <tbody>
            <tr>
              <td><label htmlFor="">Name:</label></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><label htmlFor="">Exam no:</label></td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td><label htmlFor="">Subject:</label></td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td><button type='submit' className='bg-lime-300'>submit</button></td>
              <td><button type='reset' className='bg-lime-300'>Reset</button></td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Nodejs

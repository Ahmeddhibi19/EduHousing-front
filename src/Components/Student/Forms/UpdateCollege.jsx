import React, { useState } from 'react';

const UpdateCollege = () => {
  const [college, setCollege] = useState(null);
  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] p-2 mt-[63px] flex flex-col'>
      <h1 className='text-[40px] my-5 font-bold  text-gray-500'>choose your new College :</h1>
      <select value={college} onChange={(e) => setCollege(e.target.value)}
        className='w-full sm:w-full md:w-[437px] lg:w-[477px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'>
        <option value="college1">College 1</option>
        <option value="college2">College 2</option>
        <option value="college3">College 3</option>
      </select>
    </div>
  )
}

export default UpdateCollege
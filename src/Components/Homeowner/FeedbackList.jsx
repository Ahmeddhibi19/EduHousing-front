import React from 'react'
import { useParams } from 'react-router-dom';

const FeedbackList = () => {
  const {id} =useParams();
  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] px-3'>
     <div className='w-full flex justify-center items-center mt-20 mb-9'>
        <h1 className='text-[25px] font-bold text-gray-500'>Feedback list of the apartment with id :{id}</h1>
      </div>
      <div className='w-full h-auto p-3 flex flex-col border-2 border-[#02D4DF] rounded-md bg-blue-50 shadow-lg mt-3'>
        <div className='w-full h-auto flex flex-col lg:flex-row lg:items-center lg:justify-between px-3'>
          <h1 className='font-bold'>adhibi345@gmail.com</h1>
          <div className='w-[150px] flex flex-row justify-between'>
              <h1>rating submitted :</h1>
              <h1 className='font-bold text-orange-600'>4.3</h1>
          </div>

        </div>
        <div className='w-full h-auto m-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sapiente autem cumque ut. Fugit culpa inventore quasi aliquid qui doloremque quisquam ut facere voluptas ipsam non, magni, debitis nostrum illum!
        </div>

      </div>
    </div>
  )
}

export default FeedbackList

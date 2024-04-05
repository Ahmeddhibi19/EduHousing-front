import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock, faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import ServerResponse from '../../ServerResponse';

const UpdateDetails = () => {

  const [overlay, setOverlay] = useState(false);
  const handleSubmit=(event)=>{
    event.preventDefault();
    setOverlay((e)=>!e);
  }

  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] p-2 mt-[63px] flex flex-col'>
      <h1 className='text-[40px] my-5 font-bold  text-gray-500'>Update  Details</h1>
      <form action=""  onSubmit={(e)=>handleSubmit(e)} className='w-full h-full flex flex-col px-3 ml-4'>
        <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
          <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type='text'
            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
            placeholder='First  Name'
          />
        </div>
        <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
          <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type='text'
            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
            placeholder='Last  Name'
          />
        </div>
        <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
          <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <input
            type="text"
            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
            placeholder='Address'
          />

        </div>
        <div className='w-full lg:w-[50%] h-[70px] flex flex-row  justify-between'>
          <input type="Reset" value="Reset"  className=' px-14 bg-red-600 text-white h-[40px] font-bold rounded-md'/>
          <input type="Submit"   className=' px-14 bg-submiButton text-white h-[40px] font-bold rounded-md'/>

        </div>

      </form>
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
    </div>
  )
}

export default UpdateDetails
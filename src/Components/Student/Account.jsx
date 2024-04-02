import React, { useState, useEffect } from 'react';
import ServerResponse from '../ServerResponse';
import Spinner from '../Spinner';
import { Link, NavLink } from 'react-router-dom';
const profileImage = require("../../Assets/DAB03919-10470989.webp");


const Account = () => {
    const [applicationfeedback,setApplicationfeedback]=useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [overlay,setOverlay]=useState(false);
   
  
    const handleOverlay=()=>{
        setOverlay((prev)=>!prev);
        console.log(overlay)
    }
    const handleSubmitform=()=>{
        setInputfeedback((e)=>!e)
        setOverlay((e)=>!e)
    }
    const handleCancel=()=>{
        setInputfeedback((e)=>!e)
    }
    const[inputfeedback,setInputfeedback]=useState(false);
    const handleSubmitAplicationfeedback=()=>{
        setInputfeedback((e)=>!e)
    }
    const id=215488
  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[21%] mt-[63px] flex flex-col'>
            <div className='w-full h-auto flex  flex-col justify-center    lg:flex-row   lg:justify-start  bg-customGray p-3 lg:items-center'>
                <img src={profileImage} alt="" 
                className='w-[200px] h-[200px] ml-[100px] lg:ml-6 lg:mr-4 rounded-full'
                />
                <div className='w-full flex flex-col justify-center '>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>name : <span className='text-[17px] font-bold text-gray-600 '>Ahmed</span></p>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>last name : <span className='text-[17px] font-bold text-gray-600 '>Dhibi</span></p>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>email : <span className='text-[17px] font-bold text-gray-600 '>adhibi345@gmail.com</span></p>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>phone number :<span className='text-[17px] font-bold text-gray-600 '>22773602</span></p>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>address :<span className='text-[17px] font-bold text-gray-600 '>tunis</span></p>
                    <p className='text-center sm:text-center md:text-center lg:text-start'>college :<span className='text-[17px] font-bold text-gray-600 '>ENIT</span></p>
                </div>

            </div>
            <div className='w-full h-auto flex flex-col mt-6 p-2 '>
                <h1 className='text-[#02D4DF] font-bold text-[20px]'>Your latest rental feedbacks</h1>
                <div className='w-full h-auto border-2 border-submiButton rounded-md flex flex-col justify-around mt-3'>
                    <div className='w-full flex flex-row justify-between items-center p-2 font-bold'>
                         apartment id  : <Link to='/student/apartment'>{id}</Link>
                         <div className='flex flex-row w-[40%] lg:w-[20%] justify-between'>
                                <button className='p-2 bg-red-600 text-white rounded-md'>delete</button>
                                <button className='p-2 bg-[#02D4DF] text-white rounded-md '>update</button>
                        </div>
                    </div>
                    <div className='w-full p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id doloribus rem provident, sunt atque magni exercitationem, a quos odio et similique cupiditate aperiam eligendi nulla repudiandae expedita iusto. Et.</div>
                    <p className='font-bold mb-3 p-3'>rating submitted : <span className='text-submiButton font-extrabold'> 4.3</span> </p>

                </div>
            </div>
           {applicationfeedback?
           ( <div className='w-full h-auto flex flex-col mt-6 p-2'>
                <h1 className='text-[#02D4DF] font-bold text-[20px]'>Your Application feedback</h1>
                <div className='w-full h-auto border-2 border-submiButton rounded-md flex flex-col justify-around mt-3'>
                    <div className='w-full flex flex-row justify-between items-center p-2 font-bold'>
                        
                         <div className='flex flex-row w-[40%] lg:w-[20%] justify-between right-0'>
                                <button className='p-2 bg-red-600 text-white rounded-md'>delete</button>
                                <button className='p-2 bg-[#02D4DF] text-white rounded-md '>update</button>
                        </div>
                    </div>
                    <div className='w-full p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id doloribus rem provident, sunt atque magni exercitationem, a quos odio et similique cupiditate aperiam eligendi nulla repudiandae expedita iusto. Et.</div>
                    <p className='font-bold mb-3 p-3'>rating submitted : <span className='text-submiButton font-extrabold'> 4.3</span> </p>
                </div>
            </div>):(
                <div className='w-full h-auto flex justify-center'>
                     <button 
                     className='w-auto h-auto bg-submiButton p-3 my-3 font-bold text-white rounded-md'
                     onClick={()=>handleSubmitAplicationfeedback()}
                     > Submit application's  Feedback</button>
                </div>
               
            )
            }
           {
    inputfeedback ? (
            <div  className="fixed  w-full h-full inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30">
                        <div className='"w-full h-auto flex flex-col bg-white rounded-md z-50'>
                            <form action="" className='w-[500px] flex flex-col p-10' onSubmit={()=>handleSubmitform()}>
                                <textarea
                                 name=""
                                  id=""
                                    className='w-[300px] outline-submiButton flex items-center mb-5'
                                    placeholder='Content'
                                    />
                                <input type="text" 
                                 className='w-[300px] outline-submiButton flex items-center mb-5'
                                 placeholder='rating'
                                 />
                                 <div className='w-full flex flex-row justify-between'>
                                     <button className='bg-blue-600 w-[80px] py-1 text-white font-bold rounded-md' onClick={()=>handleCancel()}>Cancel</button>
                                    <input type="Reset" className='bg-red-600 w-[80px] py-1 text-white font-bold rounded-md cursor-pointer'/>
                                    <input type="Submit" className='bg-submiButton w-[80px] py-1 text-white font-bold rounded-md cursor-pointer'/>
                                 </div>
                                 

                            </form>

                        </div>

                    </div>
        )
     : null
}
{
    
        loading?(
            <div  className="fixed  w-full h-full inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30">
                <Spinner/>
            </div>
        ):null
        
    }
    

{overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}

    </div>
  )
}

export default Account
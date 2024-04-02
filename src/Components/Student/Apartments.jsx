import React, { useState, useEffect } from 'react';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from 'react-router-dom';
import {
    faPaperPlane ,
    faUserGroup
  } from "@fortawesome/free-solid-svg-icons";
import '@splidejs/react-splide/css';
import Spinner from '../Spinner';
import ServerResponse from '../ServerResponse';
import { Link } from 'react-router-dom';
import Users from './Users';
const apartmentImage1 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage2 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage3 = require("../../Assets/DAB03919-10470989.webp");
const profileImage = require("../../Assets/DAB03919-10470989.webp");
const images = [apartmentImage1, apartmentImage2, apartmentImage3];


const Apartments = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
 const [overlay,setOverlay]=useState(false);
 const[inputfeedback,setInputfeedback]=useState(false);
 const handleSubmitAplicationfeedback=()=>{
     setInputfeedback((e)=>!e)
 }

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





  return (
    <div className=' w-full sm:w-full md:w-full lg:w-full h-auto sm:ml-2 lg:ml-[21%] mt-[63px] '>
    {
        loading?(
            <div className='w-full  h-screen sm:ml-2 lg:ml-[21%] mt-[63px] flex justify-center items-center'>
                 <Spinner className=''/>
            </div>
           
        ):(
            
        <div className='flex flex-col justify-center'>
            <div className='w-full sm:w-full md:w-full lg:w-[65%] h-auto sticky overflow-y-auto'>
                <div className=' w-full h-auto p-4 flex flex-col border-[1px] border-b-gray-600 bg-customGray' >
                    <div className='w-full h-[50px] flex flex-row'>
                        <img
                        src={profileImage}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full mr-3 "
                        />
                        <div className='h-[50px] flex flex-col items-start '>
                        <p className=""> Ahmed Dhibi</p>
                        <p className='text-gray-600 mb-3'>22773602</p>
                        </div>
                       
                    </div>
                    <div  className=' w-full  py-2 px-2 bg-customGray'>
                        <Splide options={{perPage:1,gap:"0.7rem",drag:'free'}}>
                        {
                            images.map((item)=>{
                                return(
                                    <SplideSlide key={item.id}>
                                        <div className='rounded-3xl  my-7 bg-customGray'>
                                        
                                            <img src={item} alt={item.title} className='h-[200px] w-full object-cover  cursor-pointer hover:scale-105 ease-out duration-300' />
                                        </div>
                                    </SplideSlide>
                                    
                                )
                                })
                        }
                        </Splide>
                    </div>
                    <div className='w-full flex flex-col'>
                        <p className='font-bold mb-3'>Description</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam dignissimos doloremque ad vero fugiat praesentium a placeat. Autem odit quod numquam saepe nobis recusandae esse impedit itaque ipsam temporibus!</p>

                    </div>
                    <div className='w-full flex flex-col justify-between py-7'>
                        <p className='text-[20px] mt-3'>this house is <span className='font-bold text-submiButton'>5 km</span> away from your college</p>
                        <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>4.3</span></p>

                    </div>
                    <div className='w-full flex flex-row justify-center py-3'>
                        
                        <button className='w-auto px-6 bg-submiButton font-bold text-white rounded-md' title='send feedback'
                        onClick={()=>handleSubmitAplicationfeedback()}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                       
                    </div>
                    <div className='w-full h-auto flex flex-col mt-6 p-2 '>
                <h1 className='text-[#02D4DF] font-bold text-[20px]'>Students rental feedbacks :</h1>
                <div className='w-full h-auto border-2 border-submiButton rounded-md flex flex-col justify-around mt-3'>
                    <div className='w-full flex flex-row justify-between items-center p-2 font-bold'>
                         student id  : 12158
                        
                    </div>
                    <div className='w-full p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id doloribus rem provident, sunt atque magni exercitationem, a quos odio et similique cupiditate aperiam eligendi nulla repudiandae expedita iusto. Et.</div>
                    <p className='font-bold mb-3 p-3'>rating submitted : <span className='text-submiButton font-extrabold'> 4.3</span> </p>

                </div>
            </div>

                    {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
                    {
                        inputfeedback ? (
                                <div  className="fixed  w-full h-full inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30">
                                            <div className='"w-full h-auto flex flex-col bg-white rounded-md z-50'>
                                                <form action="" className='w-[400px] flex flex-col p-10 justify-center' onSubmit={()=>handleSubmitform()}>
                                                    <textarea
                                                    name=""
                                                    id=""
                                                        className='w-[350px] outline-submiButton flex items-center mb-5'
                                                        placeholder='give an apartment feedback'
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
                </div>
              
               
            </div>
                
            </div>
        )
    }
 




</div>
)
}

export default Apartments
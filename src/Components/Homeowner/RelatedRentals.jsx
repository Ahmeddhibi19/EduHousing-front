import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import {
    faPaperPlane,
    faUserGroup,
    faStar,
    faTimes,
    faPlus,
    faCircleMinus 
} from "@fortawesome/free-solid-svg-icons";
import '@splidejs/react-splide/css';
import Spinner from '../Spinner';
import ServerResponse from '../ServerResponse';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const apartmentImage1 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage2 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage3 = require("../../Assets/DAB03919-10470989.webp");
const profileImage = require("../../Assets/DAB03919-10470989.webp");
const images = [apartmentImage1, apartmentImage2, apartmentImage3];

const RelatedRentals = () => {
    const [loading, setLoading] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const navigate=useNavigate();
    const handleOverlay = () => {
        setOverlay((prev) => !prev);
        console.log(overlay)
    }
    const handleRequestList=(rental_id) => {
        navigate(`/homeowner/requestList/${rental_id}`);
    }
    const handleUpdate=(rental_id)=>{
        navigate(`/homeowner/updateRental/${rental_id}`);
       }
       const {id} =useParams();
       const handleAddRental=(apartment_id)=>{
        navigate(`/homeowner/addRental/${apartment_id}`);
       }

    return (
        <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] flex flex-col'>
            {
                loading ? (
                    <div className='w-full  h-full  flex justify-center items-center fixed'>
                        <Spinner className='' />
                    </div>

                ) : (
                    <div className='w-full flex flex-col '>
                        <div className='w- full h-auto flex flex-row items-center justify-between px-3'>
                         <h1 className='text-[30px] w-[100%] my-5 font-bold  text-gray-500' >Rental posts you made to this apartment :</h1>
                         <div className='w-full h-[40px] flex flex-row items-center justify-end p-3'>
                            <button onClick={()=>handleAddRental(id)}><FontAwesomeIcon icon={faPlus} className='w-[60px] bg-submiButton h-[30px] text-white rounded-md cursor-pointer' title='add rental post'/></button>
                            
                        </div>
                        </div>
                        
                        <div className='w-full flex flex-col items-center'>
                            <div className=' w-full lg:w-[80%] h-auto p-4 flex flex-col border-[1px] border-green-600 bg-green-100 rounded-xl mb-3' >
                                <div className='w-full h-[50px] flex flex-row justify-between'>
                                    <div className='w-[120%] lg:w-[40%] flex flex-row items-center bg-[#02D4DF] px-2 text-white rounded-lg'>
                                        <FontAwesomeIcon icon={faClock} className='text-[25px] mr-2' />
                                        <div className='h-auto flex flex-col items-center justify-start'>
                                            <p className='text-[20px]'>current rental</p>
                                            <p className=''>ends on : <span className='text-[#EE3824] font-bold'>19/12/2023</span></p>
                                        </div>

                                    </div>
                                    <div className='w-full h-auto flex justify-end p-2'>
                                         <FontAwesomeIcon icon={faCircleMinus} className='text-[25px] text-red-600 cursor-pointer' title='remove' onClick={()=>handleOverlay()}/>
                                     </div>


                                </div>

                                <div className=' w-full  py-2 px-2 bg-green-100'>
                                    <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                        {
                                            images.map((item) => {
                                                return (
                                                    <SplideSlide key={item.id}>
                                                        <div className='rounded-3xl  my-7 bg-green-100'>

                                                            <img src={item} alt={item.title} className='h-auto w-full object-cover  cursor-pointer hover:scale-105 ease-out duration-300' />
                                                        </div>
                                                    </SplideSlide>

                                                )
                                            })
                                        }
                                    </Splide>
                                </div>
                                <div className='w-full flex flex-col'>
                                    <div className='w-full flex flex-row justify-between'>
                                        <p className='font-bold mb-3'>Description</p>
                                        <button className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF] ' onClick={()=>handleRequestList(1245)} >see associated requests</button>
                                    </div>

                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam dignissimos doloremque ad vero fugiat praesentium a placeat. Autem odit quod numquam saepe nobis recusandae esse impedit itaque ipsam temporibus!</p>

                                </div>
                                <div className='w-full flex flex-col justify-between py-7'>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>from  :</span> 19/12/2023</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>to  :</span> 19/12/2023</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>Address  :</span> Tunis</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>Type  :</span> S+2</p>
                                    <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>4.3</span></p>

                                </div>
                                <div className='w-full flex flex-row justify-between py-3'>
                                    <p className='bg-[#02D4DF] w-auto px-2 text-white rounded-md font-bold'>$1500 / month</p>
                                    <button className='bg-[#02D4DF] w-[80px] px-2 text-white rounded-md font-bold flex justify-center items-center' onClick={()=>handleUpdate(12225)}>update</button>
                    

                                </div>



                            </div>

                            <div className=' w-full lg:w-[80%] h-auto p-4 flex flex-col border-[1px] border-customGray bg-customGray rounded-xl mb-3' >
                                <div className=' w-full  py-2 px-2 bg-customGray'>
                                    <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                        {
                                            images.map((item) => {
                                                return (
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
                                    <div className='w-full flex flex-row justify-between'>
                                        <p className='font-bold mb-3'>Description</p>
                                        <NavLink to='/homeowner/requestList' className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF]'>see associated requests</NavLink>
                                    </div>

                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam dignissimos doloremque ad vero fugiat praesentium a placeat. Autem odit quod numquam saepe nobis recusandae esse impedit itaque ipsam temporibus!</p>

                                </div>
                                <div className='w-full flex flex-col justify-between py-7'>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>from  :</span> 19/12/2023</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>to  :</span> 19/12/2023</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>Address  :</span> Tunis</p>
                                    <p className='text-[#EE3824] font-bold'><span className='text-black'>Type  :</span> S+2</p>
                                    <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>4.3</span></p>

                                </div>
                                <div className='w-full flex flex-row justify-between py-3'>
                                    <p className='bg-[#02D4DF] w-auto px-2 text-white rounded-md font-bold'>$1500 / month</p>


                                </div>


                            </div>




                        </div>


                    </div>

                )
            }
            {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
        </div>
    )
}
export default RelatedRentals

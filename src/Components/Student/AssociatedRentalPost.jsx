import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from 'react-router-dom';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import {
    faPaperPlane,
    faUserGroup,
    faStar,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import '@splidejs/react-splide/css';
import Spinner from '../Spinner';
import ServerResponse from '../ServerResponse';
import { Link } from 'react-router-dom';
import Users from './Users';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const apartmentImage1 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage2 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage3 = require("../../Assets/DAB03919-10470989.webp");
const profileImage = require("../../Assets/DAB03919-10470989.webp");
const images = [apartmentImage1, apartmentImage2, apartmentImage3];

const AssociatedRentalPost = () => {
    const [loading, setLoading] = useState(false);
  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] p-2 mt-[63px] flex flex-col'>
       
       {
        loading?(
            <div className='w-full  h-full  flex justify-center items-center fixed'>
            <Spinner className='' />
        </div>
        ):(
            <div className=' w-full lg:w-[80%] h-auto p-4 flex flex-col border-[1px] border-customGray bg-customGray rounded-xl mb-3' >
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
                    <NavLink to='/student/apartment' className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF]'>see the apartment</NavLink>
                </div>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam dignissimos doloremque ad vero fugiat praesentium a placeat. Autem odit quod numquam saepe nobis recusandae esse impedit itaque ipsam temporibus!</p>

            </div>
            <div className='w-full flex flex-col justify-between py-7'>
                <p className='text-[#EE3824] font-bold'><span className='text-black'>from  :</span> 19/12/2023</p>
                <p className='text-[#EE3824] font-bold'><span className='text-black'>to  :</span> 19/12/2023</p>
                <p className='text-[20px] mt-3'>this house is <span className='font-bold text-submiButton'>5 km</span> away from your college</p>
                <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>4.3</span></p>

            </div>
            <div className='w-full flex flex-row justify-between py-3'>
                <p className='bg-[#02D4DF] w-auto px-2 text-white rounded-md font-bold'>$1500 / month</p>


            </div>


        </div>
        )
       }
    </div>
  )
}

export default AssociatedRentalPost
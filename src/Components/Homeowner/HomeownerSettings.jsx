import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from 'react-router-dom';
import {
    faPaperPlane,
    faUserGroup,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import '@splidejs/react-splide/css';
import Spinner from '../Spinner';
import ServerResponse from '../ServerResponse';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeownerSettings = () => {
    return (
        <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] p-2 mt-[63px] flex flex-col'>
            <h1 className='text-[40px] my-5 font-bold  text-gray-500'> Settings :</h1>
            <hr className='w-full h-[2px] bg-gray-500'/>
            <div className='w-full h-auto flex flex-row  justify-between pl-4 pr-10 shadow-md my-2 bg-customGray rounded-md'>
                <div className=' w-[70%] flex flex-col items-start '>
                    <h1 className='text-[25px] font-bold mt-3 mb-2'>Change Account details</h1>
                    <p className='mb-4'>Please note that you can only change your name , last name, address  </p>
                </div>
                <div className='flex items-center'>
                    <NavLink to="/homeowner/settings/updateDetails">
                        <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer text-[25px]' title='see associated Rental post' />
                    </NavLink>
                </div>
            </div>
            <div className='w-full h-auto flex flex-row  justify-between pl-4 pr-10 shadow-md my-2 bg-customGray rounded-md'>
                <div className=' w-[70%] flex flex-col items-start '>
                    <h1 className='text-[25px] font-bold mt-3 mb-2'>Change your password</h1>
                    <p  className='mb-4'>Please note that you won't be able to update your password again in a period of 2 months </p>
                </div>
                <div className='flex items-center'>
                    <NavLink to="/homeowner/settings/updatePassword">
                        <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer text-[25px]' title='see associated Rental post' />
                    </NavLink>
                </div>
            </div>
            <div className='w-full h-auto flex flex-row  justify-between pl-4 pr-10 shadow-md my-2 bg-customGray rounded-md'>
                <div className=' w-[70%] flex flex-col items-start '>
                    <h1 className='text-[25px] font-bold mt-3 mb-2'>Add profile Image</h1>
                    <p  className='mb-4'>If you already have one you need to delete the old and then add the new  photo</p>
                </div>
                <div className='flex items-center'>
                    <NavLink to="/student/settings/addProfileImage">
                        <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer text-[25px]' title='see associated Rental post' />
                    </NavLink>
                </div>
            </div>
        </div>
      )
    }

export default HomeownerSettings

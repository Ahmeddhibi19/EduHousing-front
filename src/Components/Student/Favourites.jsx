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
import { Link } from 'react-router-dom';
import Users from './Users';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const apartmentImage1 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage2 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage3 = require("../../Assets/DAB03919-10470989.webp");
const profileImage = require("../../Assets/DAB03919-10470989.webp");
const images = [apartmentImage1, apartmentImage2, apartmentImage3];

const Favourites = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const handleOverlay = () => {
        setOverlay((prev) => !prev);
        console.log(overlay)
    }

    return (
        <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[21%] mt-[63px] flex flex-col'>
            {
                loading ? (
                    <div className='w-full  h-full  flex justify-center items-center fixed'>
                        <Spinner className='' />
                    </div>
                ) : (
                    <div className='w-full flex flex-col'>
                        <h1 className='text-[40px] my-5 font-bold  text-gray-500'  >Your favourites apartments list</h1>
                        <div className='w-[96%] lg:w-[90%] ml-1 h-auto border-2 border-submiButton rounded-xl flex flex-col lg:flex-row'>
                            <div className=' w-full lg:w-[33%]  py-2 px-2 bg-customGray lg:ml-2'>
                                <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                    {
                                        images.map((item) => {
                                            return (
                                                <SplideSlide key={item.id}>
                                                    <div className='rounded-3xl  my-7 bg-customGray'>

                                                        <img src={item} alt={item.title} className='h-[150px] w-full object-cover  cursor-pointer hover:scale-105 ease-out duration-300 rounded-md' />
                                                    </div>
                                                </SplideSlide>

                                            )
                                        })
                                    }
                                </Splide>
                            </div>
                            <div className='w-full lg:w-[52%] h-full flex flex-col justify-center ml-5 my-3'>
                                <div className='w-full flex flex-row'>
                                    <img
                                        src={profileImage}
                                        alt=""
                                        className="w-[30px] h-[30px] rounded-full mr-3 "
                                    />
                                    <p className=""> Ahmed Dhibi</p>
                                </div>

                                <p className='text-gray-600 mb-3'>22773602</p>
                                <p className='text-[20px] mt-3'>this house is <span className='font-bold text-submiButton'>5 km</span> away from your college</p>
                                <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>4.3</span></p>
                            </div>
                            <div className='w-full lg:w-[15%] flex flex-row lg:flex-col justify-between lg:justify-normal'>
                                <div className='w-[50%] lg:w-[full] flex items-start lg:items-center h-full lg:h-[20%] my-3 ml-2 lg:my-0 lg:ml-14'>
                                    <FontAwesomeIcon icon={faStar} className='cursor-pointer' title='remove from favourites' onClick={() => handleOverlay()} />
                                </div>
                                <div className='w-[50%] lg:w-[full] flex justify-end items-center lg:justify-center h-full lg:h-[60%] my-3 mr-3 lg:my-0 lg:ml-10'>
                                    <NavLink to='/student/apartment'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-[25px] lg:text-[30px] text-submiButton cursor-pointer' title='see the apartment' />
                                    </NavLink>

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

export default Favourites
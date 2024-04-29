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

const Requests = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [rating, setRating] = useState('4.3');
    const [content, setContent] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id doloribus rem provident, sunt atque magni exercitationem, a quos odio et similique cupiditate aperiam eligendi nulla repudiandae expedita iusto. Et.');

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = () => {
        // Perform save operation with updated rating and description
        setIsEditing(false);
        setOverlay((e) => !e)
        // Optionally, you can handle the save operation here
    };

    const handleOverlay = () => {
        setOverlay((prev) => !prev);
        console.log(overlay)
    }


    return (
        <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] flex flex-col px-2'>
            {
                loading ? (
                    <div className='w-screen  h-screen  flex justify-center items-center  fixed'>
                        <Spinner className='' />
                    </div>

                ) : (
                    <div className='w-full h-auto felx flex-col'>
                        <h1 className='text-[40px] my-5 font-bold  text-gray-500'> Your requests :</h1>
                        <div className='w-full flex flex-col lg:flex-row'>
                            <div className='w-full h-[500px] bg-orange-50 border-[2px] border-orange-600 lg:w-[33%] rounded-md mb-3 mx-2 overflow-y-auto flex flex-col items-center'>
                                <h1 className='text-[25px] font-bold text-orange-600 mt-3'>Pending Requests ...</h1>
                                <div className='w-[95%] h-auto bg-orange-100 border-[2px] border-orange-600 mx-2 mt-2 flex flex-col rounded-md'>
                                    <div className='w-full my-2 flex flex-row px-2 justify-between'>
                                        <h1 className='font-bold'>Content</h1>
                                        <div>
                                            {isEditing ? (
                                                <div className='w-[150px] flex flex-row justify-between'>
                                                    <button className='p-2 bg-red-600 text-white rounded-md' onClick={handleCancelEdit}>Cancel</button>
                                                    <button className='p-2 bg-[#02D4DF] text-white rounded-md' onClick={handleSaveEdit}>Save</button>
                                                </div>
                                            ) : (
                                                <div className='w-[150px] flex flex-row justify-between'>
                                                    <button className='p-2 bg-[#02D4DF] text-white rounded-md' onClick={handleEdit}>Update</button>
                                                    <button className='p-2 bg-red-600 text-white rounded-md' onClick={() => handleOverlay()}>delete</button>
                                                </div>


                                            )}
                                        </div>

                                    </div>
                                    <div className='w-full h-auto px-2'>
                                        {isEditing ? (

                                            <textarea
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                className='w-full p-3 outline-none border-2 border-gray-300 rounded-md'
                                                rows='4'
                                            />


                                        ) : (
                                            <div className='w-full p-3'>
                                                <p>{content}</p>
                                            </div>
                                        )}

                                    </div>
                                    <div className='w-full flex justify-between mr-5 my-3'>
                                        <p className='font-bold '>rental post id : <span className='text-black'>5</span></p>
                                        <NavLink to="/student/requests/associatedRental">
                                            <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer' title='see associated Rental post' />
                                        </NavLink>
                                    </div>

                                </div>



                            </div>
                            <div className='w-full h-[500px] bg-blue-50 border-[2px] border-[#02D4DF] lg:w-[33%] rounded-md mb-3 mx-2 overflow-y-auto flex flex-col items-center'>
                                <h1 className='text-[25px] font-bold text-[#02D4DF] mt-3'>Accepted Requests ...</h1>
                                <div className='w-[95%] h-auto px-2 border-[2px] bg-blue-100 border-[#02D4DF]  rounded-md mt-2 flex flex-col '>
                                    <div className='w-full h-auto py-2 flex flex-row justify-between'>
                                        <h1 className='font-bold'>Content</h1>
                                        <p className='font-bold '>rental post id : <span className='text-red-600'>5</span></p>
                                        <NavLink to="/student/requests/associatedRental">
                                            <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer' title='see associated Rental post' />
                                        </NavLink>

                                    </div>
                                    <div className='w-full p-3'>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum, culpa reprehenderit dolore doloremque labore cum laboriosam repellat aliquid ipsam explicabo velit eligendi officiis dolorum nisi impedit ab voluptatem ullam?</p>

                                    </div>
                                </div>
                               

                            </div>
                            <div className='w-full h-[500px] bg-green-50 border-[2px] border-submiButton lg:w-[33%] rounded-md mb-3 mx-2 overflow-y-auto flex flex-col items-center'>
                                <h1 className='text-[25px] font-bold text-submiButton mt-3'>Validated Requests ...</h1>
                                <div className='w-[95%] h-auto px-2 border-[2px] bg-green-100 border-submiButton  rounded-md mt-2 flex flex-col '>
                                    <div className='w-full h-auto py-2 flex flex-row justify-between'>
                                        <h1 className='font-bold'>Content</h1>
                                        <p className='font-bold '>rental post id : <span className='text-red-600'>5</span></p>
                                        <NavLink to="/student/requests/associatedRental">
                                            <FontAwesomeIcon icon={faArrowRight} className=' cursor-pointer' title='see associated Rental post' />
                                        </NavLink>
                                        

                                    </div>
                                    <div className='w-full p-3'>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum, culpa reprehenderit dolore doloremque labore cum laboriosam repellat aliquid ipsam explicabo velit eligendi officiis dolorum nisi impedit ab voluptatem ullam?</p>

                                    </div>
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

export default Requests
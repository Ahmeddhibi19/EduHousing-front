import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
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
    const accessToken = localStorage.getItem('accessToken');
    const [loading, setLoading] = useState(true);
    const [overlay, setOverlay] = useState(false);
    const [rentals, setRentals] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8081/api/EduHousing/v1.0.0/rentalDetails/homeowner_admin/apartment/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )
            .then(resppnse => {
                setRentals(resppnse.data)

                setLoading(false)

            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    const handleOverlay = () => {
        setOverlay((prev) => !prev);
        console.log(overlay)
    }
    const handleRequestList = (rental_id) => {
        navigate(`/homeowner/requestList/${rental_id}`);
    }
    const handleUpdate = (rental_id) => {
        navigate(`/homeowner/updateRental/${rental_id}`);
    }

    const handleAddRental = (apartment_id) => {
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
                            <h1 className='text-[30px] w-[100%] my-5 font-bold  text-gray-500' >Rental posts you made to this apartment with id  <span className='text-red-600'>{id}</span>:</h1>
                            <div className='w-full h-[40px] flex flex-row items-center justify-end p-3'>
                                <button onClick={() => handleAddRental(id)}><FontAwesomeIcon icon={faPlus} className='w-[60px] bg-submiButton h-[30px] text-white rounded-md cursor-pointer' title='add rental post' /></button>

                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center'>
                            {
                                rentals.map((rental, index) => {
                                    return  rental.isCurrent ? (
                                        <div key={rental.id} className=' w-full lg:w-[80%] h-auto p-4 flex flex-col border-[1px] border-green-600 bg-green-100 rounded-xl mb-3' >
                                            <div className='w-full h-auto flex flex-row justify-between'>
                                                <div className='w-[120%] lg:w-[40%] h-auto flex flex-row items-center bg-[#02D4DF] px-2 text-white rounded-lg'>
                                                    <FontAwesomeIcon icon={faClock} className='text-[25px] mr-2' />
                                                    <div className='h-auto flex flex-col items-center justify-start'>
                                                        <p className='text-[20px]'>current rental</p>
                                                        <p className=''>ends on : <span className='text-[#EE3824] font-bold'>{formatDate(rental.endDate)}</span></p>
                                                    </div>

                                                </div>
                                                <div className='w-full h-auto flex justify-end p-2'>
                                                    <FontAwesomeIcon icon={faCircleMinus} className='text-[25px] text-red-600 cursor-pointer' title='remove' onClick={() => handleOverlay()} />
                                                </div>


                                            </div>

                                            <div className=' w-full  py-2 px-2 bg-green-100'>
                                                <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                                    {
                                                        rental.apartment.images.map((imageData, index)  => {
                                                            return (
                                                                <SplideSlide key={index}>
                                                                    <div className='rounded-3xl flex flex-row justify-center  my-7 bg-green-100'>

                                                                    <img src={`data:image/${getImageType(imageData.data)};base64,${imageData.data}`} alt={`Apartment ${index + 1}`} className='h-[400px] w-[600px] object-cover  cursor-pointer hover:scale-105 ease-out duration-300' />
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
                                                    <button className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF] ' onClick={() => handleRequestList(rental.id)} >see associated requests</button>
                                                </div>

                                                <p> {rental.description}</p>

                                            </div>
                                            <div className='w-full flex flex-col justify-between py-7'>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>from  :</span> {formatDate(rental.startDate)}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>to  :</span>{formatDate(rental.endDate)}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment city  :   </span>{rental.apartment.citydto["name"]}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment address  :</span> {rental.apartment.address}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment type  :</span>{rental.apartment.type}</p>
                                                <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>{rental.apartment.rating}</span></p>

                                            </div>
                                            <div className='w-full flex flex-row justify-between py-3'>
                                                <p className='bg-[#02D4DF] w-auto px-2 text-white rounded-md font-bold'>{rental.monthlyAmount} dt</p>
                                                <button className='bg-[#02D4DF] w-[80px] px-2 text-white rounded-md font-bold flex justify-center items-center' onClick={() => handleUpdate(rental.id)}>update</button>


                                            </div>



                                        </div>
                                    ) : (
                                        <div key={rental.id} className=' w-full lg:w-[80%] h-auto p-4 flex flex-col border-[1px] border-customGray bg-customGray rounded-xl mb-3' >
                                            <div className=' w-full  py-2 px-2 bg-customGray'>
                                                <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                                {
                                                        rental.apartment.images.map((imageData, index)  => {
                                                            return (
                                                                <SplideSlide key={index}>
                                                                    <div className='rounded-3xl flex flex-row justify-center  my-7 bg-green-100'>

                                                                    <img src={`data:image/${getImageType(imageData.data)};base64,${imageData.data}`} alt={`Apartment ${index + 1}`} className='h-[400px] w-[600px] object-cover  cursor-pointer hover:scale-105 ease-out duration-300' />
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
                                                    <button className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF] ' onClick={() => handleRequestList(rental.id)} >see associated requests</button>
                                                </div>

                                                <p> {rental.description}</p>

                                            </div>
                                            <div className='w-full flex flex-col justify-between py-7'>
                                            <p className='text-[#EE3824] font-bold'><span className='text-black'>from  :</span> {formatDate(rental.startDate)}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>to  :</span>{formatDate(rental.endDate)}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment city  :   </span>{rental.apartment.citydto["name"]}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment address  :</span> {rental.apartment.address}</p>
                                                <p className='text-[#EE3824] font-bold'><span className='text-black'>Apartment type  :</span>{rental.apartment.type}</p>
                                                <p className='text-[20px] mt-3'>Apartmen rating : <span className='text-[#EE3824] font-bold'>{rental.apartment.rating}</span></p>

                                            </div>
                                            <div className='w-full flex flex-row justify-between py-3'>
                                            <p className='bg-[#02D4DF] w-auto px-2 text-white rounded-md font-bold'>{rental.monthlyAmount} dt</p>


                                            </div>


                                        </div>
                                    )
                                })
                            }







                        </div>


                    </div>

                )
            }
            {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
        </div>
    )
}
function getImageType(base64String) {
    // This function extracts the MIME type from the base64 string
    const mimeType = base64String.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mimeType && mimeType.length) {
        const type = mimeType[1].split('/')[1]; // Extract the image extension from the MIME type
        // Handle SVG images separately
        if (type === 'svg+xml') {
            return 'svg';
        } else {
            return type;
        }
    } else {
        return 'jpeg'; // Default to JPEG if the type cannot be determined
    }
}
const formatDate = (dateString) => {
    const date = new Date(dateString); // Parse the date string
    return date.toLocaleDateString('en-GB'); // Format the date as "dd/mm/yyyy"
};


export default RelatedRentals

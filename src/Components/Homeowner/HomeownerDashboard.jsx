import React, { useState, useEffect, } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet,useNavigate } from 'react-router-dom';
import imageType from 'image-type';
import {
    faPaperPlane,
    faUserGroup,
    faComment ,
    faPlus ,
    faCircleMinus 
} from "@fortawesome/free-solid-svg-icons";
import '@splidejs/react-splide/css';
import Spinner from '../Spinner';
import ServerResponse from '../ServerResponse';
import { Link } from 'react-router-dom';
import axios from 'axios';


const apartmentImage1 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage2 = require("../../Assets/DAB03919-10470989.webp");
const apartmentImage3 = require("../../Assets/DAB03919-10470989.webp");
const profileImage = require("../../Assets/DAB03919-10470989.webp");
const images = [apartmentImage1, apartmentImage2, apartmentImage3];

const HomeownerDashboard = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [inputfeedback, setInputfeedback] = useState(false);
  const[sortBy,setSortBy]=useState(null);
  const[maxDistance,setMaxDistance]=useState(null)
  const [apartments,setApartments]=useState([]);

  const navigate = useNavigate();
  const handleSubmitAplicationfeedback = () => {
      setInputfeedback((e) => !e)
  }

  const handleOverlay = () => {
      setOverlay((prev) => !prev);
      console.log(overlay)
  }
  const handleSubmitform = () => {
      setInputfeedback((e) => !e)
      setOverlay((e) => !e)
  }
  const handleCancel = () => {
      setInputfeedback((e) => !e)
  }
  const handleUpdate=(id)=>{
   navigate(`/homeowner/updateapartment/${id}`);
  }
  const handleRentalList=(id)=>{
    navigate(`/homeowner/rentallist/${id}`);
  }
  const HandleFeedBackList=(id)=>{
    navigate(`/homeowner/comment/${id}`);
  }
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('accessToken');

 useEffect(()=>{ 
    axios.get(`http://localhost:8081/api/EduHousing/v1.0.0/apartment/homeowner/${userId}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
          }
    }
)
    .then(resppnse=>{
        setApartments(resppnse.data)
       
        setLoading(false)
 
    })
    .catch((error)=>{
        console.log(error);
    })

 },[])


  return (
      <div className=' w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] '>
          {
              loading ? (
                  <div className='w-full  h-screen sm:ml-2 lg:ml-[21%] mt-[63px] flex justify-center items-center'>
                      <Spinner className='' />
                  </div>
              ) : (
                  <div className='flex flex-row items-start'>
                      <div className='w-full sm:w-full md:w-full lg:w-[65%] h-auto sticky overflow-y-auto flex flex-col'>
                        <div className='w-full h-[40px] flex flex-row items-center justify-end p-3'>
                            <NavLink to='/homeowner/addApartment'>
                                <FontAwesomeIcon icon={faPlus} className='w-[60px] bg-submiButton h-[30px] text-white rounded-md cursor-pointer' title='add apartment'/>
                            </NavLink>
                            
                        </div>
                      <h1 className='text-[40px] my-5 font-bold  text-gray-500 ml-2'  >Your apartments list :</h1>
                      {
                        apartments.map((apartment)=>{
                            return(
                                <div key={apartment.id} className=' w-full h-auto p-4 flex flex-col border-[1px] border-b-gray-600 bg-customGray' >
                            <div className='w-full h-auto flex justify-end p-2'>
                                <FontAwesomeIcon icon={faCircleMinus} className='text-[25px] text-red-600 cursor-pointer' title='remove' onClick={()=>handleOverlay()}/>
                            </div>
                              <div className=' w-full  py-2 px-2 bg-customGray'>
                                  <Splide options={{ perPage: 1, gap: "0.7rem", drag: 'free' }}>
                                  {apartment.imageList.map((imageData, index) => (
                      <SplideSlide key={index}>
                        <div className='rounded-3xl  my-7 bg-customGray'>
                          <img src={`data:image/${getImageType(imageData)};base64,${imageData}`} alt={`Apartment ${index + 1}`} className='h-[200px] w-full object-cover  cursor-pointer hover:scale-105 ease-out duration-300' />
                        </div>
                      </SplideSlide>
                    ))}
                                  </Splide>
                              </div>
                              <div className='w-full flex flex-col'>
                                  <div className='w-full flex flex-row justify-between'>
                                      <p className='font-bold mb-3'>Description</p>
                                      <button className='bg-submiButton flex items-center px-2 text-white font-bold rounded-md hover:bg-[#02D4DF]' onClick={()=>handleRentalList(12345)}>see associated Rental posts</button>
                                  </div>
                                  <p> {apartment.description}</p>
                              </div>
                              <div className='w-full flex flex-col justify-between py-7'>
                              <p className='text-[20px] mt-3'>Address : <span className='text-[#EE3824] font-bold'>{apartment.address}</span></p>
                                  <p className='text-[20px] mt-3'>Apartment rating : <span className='text-[#EE3824] font-bold'>{apartment.rating}</span></p>
                                  <p className='text-[20px] mt-3'>Apartment type : <span className='text-[#EE3824] font-bold'>{apartment.type}</span></p>
                              </div>
                              <div className='w-full flex flex-row justify-between py-3'>
                                <button onClick={()=>HandleFeedBackList(12245)} className='bg-[#02D4DF] w-[80px] px-2 text-white rounded-md font-bold flex justify-center items-center' > <FontAwesomeIcon icon={faComment} title='check rental feedback'/></button>
                                <button className='bg-[#02D4DF] w-[80px] px-2 text-white rounded-md font-bold flex justify-center items-center' onClick={()=>handleUpdate(12445)}>update</button>
                    
                              </div>
                          </div>
                            )
                        })
                      }
                     


                      </div>
                      <div className='w-[32%]  hidden sm:hidden md:hidden lg:inline   fixed ml-[52%] z-10  flex-col '>
                          <div className='w-full h-[50px] flex flex-row items-center justify-start px-3 bg-customGray stiky '>
                              <Link to=""> <FontAwesomeIcon icon={faUserGroup} className='text-gray-600 mr-4 sticky' /></Link>
                              <p className='text-gray-600 text-xl'>Contacts</p>
                          </div>
                          <div className='w-full h-full sticky'>
                              <Outlet />
                          </div>


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
       return mimeType[1].split('/')[1]; // Extract the image extension from the MIME type
    } else {
       return 'jpeg'; // Default to JPEG if the type cannot be determined
    }
   }

export default HomeownerDashboard
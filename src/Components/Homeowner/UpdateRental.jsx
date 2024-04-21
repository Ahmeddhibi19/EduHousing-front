import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServerResponse from '../ServerResponse';

const UpdateRental = () => {
  const accessToken = localStorage.getItem('accessToken');
  const { rental_id } = useParams();
  const [responseData, setResponseData] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [rentalData, setRentalData] = useState({
    id:rental_id,
    startDate: '',
    endDate: '',
    monthlyAmount: '',
    description: '',
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalData({ ...rentalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/api/EduHousing/v1.0.0/rentalDetails/homeowner/update`,rentalData,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res=>{
      setResponseData("rental post updated successfully")
    }).catch((err)=>{
      console.log(err);setResponseData(err.response.data.message)
    })
    // Handle form submission, e.g., send updated data to backend
    console.log(rentalData);
    setOverlay(true)
  };

  return (
    <div className="w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px]">
      <div className="w-full flex justify-center items-center my-20">
        <h1 className="text-[25px] font-bold text-gray-500">Update Rental Post with id :{rental_id}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={rentalData.startDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={rentalData.endDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="monthlyAmount" className="block text-gray-700 font-bold mb-2">
            Monthly Amount
          </label>
          <input
            type="number"
            id="monthlyAmount"
            name="monthlyAmount"
            value={rentalData.monthlyAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={rentalData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"

          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Rental Post
        </button>
      </form>
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData} /> : null}
    </div>
  );
};

export default UpdateRental;


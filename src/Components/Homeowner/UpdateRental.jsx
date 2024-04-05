import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateRental = () => {
  const { rental_id } = useParams();
  const [rentalData, setRentalData] = useState({
    startDate: '',
    endDate: '',
    monthlyAmount: '',
    description: '',
  });

  // Fetch rental data from backend using the ID when the component mounts
  useEffect(() => {
    // Example fetch code to get rental data based on ID
    const fetchRentalData = async () => {
      try {
        const response = await fetch(`api/rentals/${rental_id}`); // Replace 'api/rentals/${id}' with your actual API endpoint
        const data = await response.json();
        setRentalData(data); // Set rental data received from backend to state
      } catch (error) {
        console.error('Error fetching rental data:', error);
      }
    };

    fetchRentalData();
  }, [rental_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalData({ ...rentalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send updated data to backend
    console.log(rentalData);
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Rental Post
        </button>
      </form>
    </div>
  );
};

export default UpdateRental;


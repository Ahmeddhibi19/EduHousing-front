import React, { useState } from 'react';
import ServerResponse from '../ServerResponse';
import axios from 'axios';

const AddCity = () => {
  const [cityName, setCityName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [responseData, setResponseData] = useState('');

  const handleAddCity = () => {
    const accessToken = localStorage.getItem('accessToken');
    const cityData = {
      name: cityName,
      postalCode: postalCode
    };
    axios.post('http://localhost:8081/api/EduHousing/v1.0.0/city/admin/create', cityData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setResponseData('City added successfully')
      // Handle successful response
      console.log('City added successfully:', response.data);
      // You can perform additional actions here, like showing a success message
    })
    .catch(error => {
      // Handle error
      console.error('Error adding city:', error);
      setResponseData(error)
      // You can display an error message to the user
    });
    setOverlay((e)=>!e)
  };
  

  return (
    <div className='w-[80%] h-screen ml-[20%]  p-5 flex flex-col items-center justify-center'>
      <h2 className="text-2xl font-bold mb-4">Add City</h2>
      <div className="flex flex-col w-[60%]">
        <label className="mb-2 font-semibold">Name</label>
        <input
          type="text"
          className="border p-2 mb-4"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <label className="mb-2 font-semibold">Postal Code</label>
        <input
          type="text"
          className="border p-2 mb-4"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddCity}
        >
          Add City
        </button>
      </div>
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData} /> : null}
      </div>
  )
}

export default AddCity
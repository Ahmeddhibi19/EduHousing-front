import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const AddApartment = () => {
  const [apartmentData, setApartmentData] = useState({
    latitude: '',
    longitude: '',
    address: '',
    description: '',
    type: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApartmentData({ ...apartmentData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setApartmentData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(apartmentData);
  };
  const handleMapClick = (e) => {
    setApartmentData({
      ...apartmentData,
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
    });
  };

  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px]'>
      <div className='w-full flex justify-center items-center my-20'>
        <h1 className='text-[25px] font-bold text-gray-500'>Add apartment</h1>
      </div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={{ lat: Number(apartmentData.latitude), lng: Number(apartmentData.longitude) }}
          zoom={15}
          onClick={handleMapClick}
        >
          <Marker
            position={{ lat: Number(apartmentData.latitude), lng: Number(apartmentData.longitude) }}
          />
        </GoogleMap>
      </LoadScript>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='latitude' className='block text-gray-700 font-bold mb-2'>
            Latitude
          </label>
          <input
            type='text'
            id='latitude'
            name='latitude'
            value={apartmentData.latitude}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
            placeholder='Enter latitude'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='longitude' className='block text-gray-700 font-bold mb-2'>
            Longitude
          </label>
          <input
            type='text'
            id='longitude'
            name='longitude'
            value={apartmentData.longitude}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
            placeholder='Enter longitude'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='address' className='block text-gray-700 font-bold mb-2'>
            Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            value={apartmentData.address}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
            placeholder='Enter address'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={apartmentData.description}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
            placeholder='Enter description'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
            Type
          </label>
          <input
            type='text'
            id='type'
            name='type'
            value={apartmentData.type}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
            placeholder='Enter type'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='images' className='block text-gray-700 font-bold mb-2'>
            Images
          </label>
          <input
            type='file'
            id='images'
            name='images'
            onChange={handleImageChange}
            className='w-full'
            multiple
            accept='image/*'
            required
          />
        </div>
        <div className='mb-4 w-full h-auto flex flex-row overflow-y-auto'>
          {apartmentData.images.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} className='w-32 h-32 object-cover mr-2 mb-2' />
          ))}
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Add Apartment
        </button>
      </form>
    </div>
  );
};

export default AddApartment;

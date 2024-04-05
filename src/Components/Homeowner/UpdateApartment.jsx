import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

    const UpdateApartment = () => {
      const { id } = useParams();
      const [apartmentData, setApartmentData] = useState({
          existingImages: [],
          newImages: [],
          description: '',
          type: '',
          address: '',
          // Add other apartment details
      });

      useEffect(() => {
        // Fetch apartment data from the server based on ID
        axios.get(`your_api_endpoint/${id}`)
            .then(response => {
                // Set the fetched apartment data
                setApartmentData(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching apartment data:', error);
            });
    }, [id]);

    const handleDeleteExistingImage = (index) => {
      // Implement delete request to server for existing image
      const imageToDelete = apartmentData.existingImages[index];
      axios.delete(`your_api_endpoint/${id}/images/${imageToDelete.id}`)
          .then(response => {
              // Remove the image from the list if deletion is successful
              const updatedExistingImages = [...apartmentData.existingImages];
              updatedExistingImages.splice(index, 1);
              setApartmentData({ ...apartmentData, existingImages: updatedExistingImages });
          })
          .catch(error => {
              // Handle error
              console.error('Error deleting existing image:', error);
          });
  };

  const handleDeleteNewImage = (index) => {
      // Remove the new image from the list
      const updatedNewImages = [...apartmentData.newImages];
      updatedNewImages.splice(index, 1);
      setApartmentData({ ...apartmentData, newImages: updatedNewImages });
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setApartmentData({ ...apartmentData, [name]: value });
  };

  const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setApartmentData((prevData) => ({
          ...prevData,
          newImages: [...prevData.newImages, ...files],
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission to update apartment data
      // Send only new images to the server for saving
      const formData = new FormData();
      apartmentData.newImages.forEach((image) => {
          formData.append('images', image);
      });
      axios.post(`your_api_endpoint/${id}/images`, formData)
          .then(response => {
              // Handle successful image upload
              console.log('New images uploaded successfully:', response.data);
          })
          .catch(error => {
              // Handle error
              console.error('Error uploading new images:', error);
          });
  };


    return (
        <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] px-3'>
          <div className='w-full flex justify-center items-center my-20'>
            <h1 className='text-[25px] font-bold text-gray-500'>Update apartment with id : {id}</h1>
          </div>
            {/* Display apartment images with delete buttons */}
            <h1 className='text-gray-700 font-bold mb-2'>existing images</h1>
            <div className="flex flex-wrap overflow-x-auto">
                {apartmentData.existingImages.map((image, index) => (
                    <div key={index} className="relative w-32/4 p-2">
                        <img src={image.url} alt={`Existing Image ${index}`} className="w-32 h-32 object-cover" />
                        <button className="absolute top-0 right-0 rounded-full bg-red-500 text-white p-1" onClick={() => handleDeleteExistingImage(index)}>X</button>
                    </div>
                ))}
            </div>
            <h1 className='text-gray-700 font-bold mb-2'>new images</h1>
            <div className="flex flex-wrap overflow-x-auto">
                {apartmentData.newImages.map((image, index) => (
                    <div key={index} className="relative w-32/4 p-2">
                        <img src={URL.createObjectURL(image)} alt={`New Image ${index}`} className="w-32 h-32 object-cover" />
                        <button className="absolute top-0 right-0 rounded-full bg-red-500 text-white p-1" onClick={() => handleDeleteNewImage(index)}>X</button>
                    </div>
                ))}
            </div>
            {/* Button to upload multiple files */}
            <div className="mb-4">
                <label htmlFor="fileUpload" className="block text-gray-700 font-bold mb-2">
                    Upload Images
                </label>
                <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    onChange={handleImageChange}
                    className="hidden"
                    multiple
                    accept="image/*"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => document.getElementById('fileUpload').click()}
                >
                    Add Images
                </button>
            </div>
            {/* Display input fields for apartment details */}
            <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor='address' className='block text-gray-700 font-bold mb-2'>
                    Address
                </label>
                <input
                    type='text'
                    id='address'
                    name='adress'
                    value={apartmentData.address}
                    placeholder='Enter new address'
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                    
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
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Update Apartment
                </button>
            </form>
        </div>
    );
};

export default UpdateApartment;

import React, { useState } from 'react';
import ServerResponse from '../../ServerResponse';

const AddProfileImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [overlay,setOverlay]=useState(false);
    
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
        setSelectedFile(file);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setOverlay((e)=>!e);
      // You can handle the file upload logic here, using FormData or any other method
      // For demonstration purposes, let's just log the selected file
      console.log(selectedFile);
    };
  return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] p-2 mt-[63px] flex flex-col'>
        <h2 className="text-lg font-semibold mb-4">Upload Profile Image</h2>
      {previewImage ? (
        <img src={previewImage} alt="Preview" className="max-w-full mb-4" />
      ) : (
        <div className="bg-gray-200 w-48 h-48 flex justify-center items-center mb-4">
          <span className="text-gray-500">Preview</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .webp"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Image
        </button>
      </form>
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
    </div>
  )
}

export default AddProfileImage
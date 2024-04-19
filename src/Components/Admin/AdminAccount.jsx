import React, { useEffect, useState } from 'react';
import profileImage from "../../Assets/DAB03919-10470989.webp";
import axios from 'axios';

const AdminAccount = () => {

  return (
    <div className="w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] flex flex-col">
      {/* Profile Image */}
      <div className='w-full flex items-center justify-center mt-4'>
      <img src={profileImage} alt="Profile" className="w-[200px] h-[200px] rounded-full mb-4" />
      </div>
     

      {/* Name and Role */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Admin</p>
      </div>

      {/* Admin Details */}
      <div className="flex flex-col w-full ml-4">
        <div className="flex mb-2">
          <p className="font-semibold mr-2">First Name:</p>
          <p>John</p>
        </div>
        <div className="flex mb-2">
          <p className="font-semibold mr-2">Last Name:</p>
          <p>Doe</p>
        </div>
        <div className="flex mb-2">
          <p className="font-semibold mr-2">Address:</p>
          <p>123 Main St, City</p>
        </div>
        <div className="flex mb-2">
          <p className="font-semibold mr-2">Email:</p>
          <p>john.doe@example.com</p>
        </div>
        <div className="flex mb-2">
          <p className="font-semibold mr-2">Phone Number:</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="flex mb-2">
          <p className="font-semibold mr-2">Role:</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;

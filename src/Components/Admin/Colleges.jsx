import React from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
  // Sample data for demonstration
  const colleges = [
    { id: 1, name: 'University of Example', city: 'Example City', address: '123 Example St', latitude: 123.456, longitude: -78.901 },
    { id: 2, name: 'College of Sample', city: 'Sampletown', address: '456 Sample Ave', latitude: 12.345, longitude: -67.890 },
    // Add more colleges as needed
  ];

  const handleUpdateCollege = (collegeId) => {
    // Implement update college functionality here
    console.log(`Updating college with ID: ${collegeId}`);
  };

  const handleDeleteCollege = (collegeId) => {
    // Implement delete college functionality here
    console.log(`Deleting college with ID: ${collegeId}`);
  };

  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Colleges</h2>
        <Link to='/admin/colleges/add' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Add College
        </Link>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                ID
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                City
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Address
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Latitude
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Longitude
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {colleges.map((college) => (
              <tr key={college.id}>
                <td className='px-6 py-4 whitespace-nowrap'>{college.id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{college.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{college.city}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{college.address}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{college.latitude}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{college.longitude}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                <Link
                    to={`/admin/colleges/update/${college.id}`}
                    className='text-blue-500 hover:text-blue-700 font-medium mr-2 focus:outline-none'
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteCollege(college.id)}
                    className='text-red-500 hover:text-red-700 font-medium focus:outline-none'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Colleges;

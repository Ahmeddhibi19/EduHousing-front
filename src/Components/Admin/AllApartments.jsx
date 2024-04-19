import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllApartments = () => {
  const [apartments,setApartments]=useState([])
  const [overlay, setOverlay] = useState(false);
  const [responseData, setResponseData] = useState('');
  

  useEffect(() => {
    // Function to fetch data when component mounts
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        // Make a GET request to fetch cities data
        const response = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/apartment/findAll',{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        // Set the fetched data to state
        setApartments(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
        // You can display an error message to the user
      }
    };

    // Call the fetchData function when component mounts
    fetchData();

    // Clean up function (optional)
    // If you need to do any cleanup (like canceling timers or clearing intervals) when the component is unmounted, you can define a cleanup function inside useEffect.
    return () => {
      // Cleanup logic here
    };
  }, []); 


  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>
    <div className='flex justify-between items-center mb-4'>
      <h2 className='text-2xl font-bold'>Apartments</h2>
    
    </div>
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ID
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Homeowner email
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              City
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Address
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Type
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
          {apartments.map((apartment) => (
            <tr key={apartment.id}>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.id}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.homeowner.email}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.citydto.name}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.address}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.type}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.latitude}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{apartment.longitude}</td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Link to={`/admin/apartments/total_rental_post/${apartment.id}`} className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600'>
                  associated rental posts
                </Link>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  </div>
);
};

export default AllApartments
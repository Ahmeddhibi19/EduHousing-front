import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServerResponse from '../ServerResponse';
const Colleges = () => {

  const [colleges, setColleges] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    // Function to fetch data when component mounts
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        // Make a GET request to fetch cities data
        const response = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/college/findAll',{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        // Set the fetched data to state
        setColleges(response.data);
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



  const handleDelete=(id)=>{
    const accessToken = localStorage.getItem('accessToken');
    axios.delete(`http://localhost:8081/api/EduHousing/v1.0.0/college/admin/delete_by_id/${id}`,{
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then((response)=>{
       setResponseData(response.data);
       console.log('city deleted successfully')
 })
    .catch((error)=>{
      setResponseData('somthing went wrong')
      console.log(error);
    })
    setOverlay((e)=>!e)
  }


  // Sample data for demonstration
  const colleges2 = [
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
                    onClick={() => handleDelete(college.id)}
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
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData} /> : null}
    </div>
  );
};

export default Colleges;

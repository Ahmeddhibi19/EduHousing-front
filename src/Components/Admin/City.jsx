import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Spinner from '../Spinner';
import axios from 'axios';
import ServerResponse from '../ServerResponse';

const City = () => {
   // Example state for cities data
   const [cities, setCities] = useState([]);
   const [overlay, setOverlay] = useState(false);
   const [responseData, setResponseData] = useState('');

   // Example function to fetch cities data from the database
   useEffect(() => {
    // Function to fetch data when component mounts
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        // Make a GET request to fetch cities data
        const response = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/city/findAll',{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        // Set the fetched data to state
        setCities(response.data);
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
    axios.delete(`http://localhost:8081/api/EduHousing/v1.0.0/city/admin/delete_by_id/${id}`,{
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
   return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>
      {
        cities==null?(
          <div className='w-full h-[500px] flex justify-center items-center'>
          <Spinner className='' />
      </div>
        ):(
          <>
              <div className='w-full h-auto flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold'>Cities</h1>
        <NavLink to='/admin/city/add' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
         Add City
       </NavLink>
      </div>
      
       <div className="grid grid-cols-1 gap-4">
         {cities.map(city => (
           <div key={city.id} className="border p-4">
             <div className="flex justify-between mb-2">
               <h2 className="font-bold text-lg">{city.name}</h2>
               <div>
                 <Link to={`/admin/city/update/${city.id}`}  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                   Update
                 </Link>
                 <button onClick={()=>handleDelete(city.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                   Delete
                 </button>
               </div>
             </div>
             <p className="text-sm">Postal Code: {city.postalCode}</p>
           </div>
         ))}
       </div>
          </>
        )
      }
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData} /> : null}
     </div>
   );
 };

export default City
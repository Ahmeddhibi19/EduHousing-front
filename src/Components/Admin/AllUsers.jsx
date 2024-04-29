import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServerResponse from '../ServerResponse';

const AllUsers = () => {
  const [admin, setAdmin] = useState([]);
  const [student, setStudent] = useState([]);
  const [homeowner, setHomeowner] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [mongoId,setMongoId]=useState('');
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const adminsResponse = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/admin/authorized/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const studentsResponse = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/student/admin/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const homeownersResponse = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/homeowner/admin/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        setAdmin(adminsResponse.data);
        setStudent(studentsResponse.data);
        setHomeowner(homeownersResponse.data);

        // Set all users after fetching data from all endpoints
        setAllUsers([...adminsResponse.data, ...studentsResponse.data, ...homeownersResponse.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = (userId,email) => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get(`http://localhost:8081/mongouser/${email}`,{
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  }).then((res)=>{
     setMongoId(res.data)
  })
    try{
      axios.delete(`http://localhost:8081/api/EduHousing/v1.0.0/user/admin/delete_by_id/${userId}/${mongoId}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res=>{
        setResponseData(res.data)
        console.log(res.data)
      })

    }catch(error){}
    // Implement delete user functionality here
    console.log(`Deleting user with ID: ${userId}`);
    setOverlay(true);
  };

  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>
      <h2 className='text-2xl font-bold mb-4'>All Users</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10%'>
                User ID
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-25%'>
                Full Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-30%'>
                Email
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20%'>
                Role
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td className='px-6 py-4 whitespace-nowrap'>{user.id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.firstName + ' ' + user.lastName}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.email}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.role}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button
                    onClick={() => handleDeleteUser(user.id,user.email)}
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

export default AllUsers;

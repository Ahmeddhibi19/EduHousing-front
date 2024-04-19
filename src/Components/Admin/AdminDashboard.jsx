import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, LineElement, PointElement } from "chart.js";
import CircleIndicator from './CircleIndicator';
import axios from 'axios';

const AdminDashboard = () => {
  const [connectedUsersPercentage, setConnectedUsersPercentage] = React.useState(25);
  const [numberUsers,setNumberUsers]=useState();
  useEffect(() => {
    // Function to fetch data when component mounts
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      try {
        // Make a GET request to fetch cities data
        const response = await axios.get('http://localhost:8081/api/EduHousing/v1.0.0/admin/total_number_user',{
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        // Set the fetched data to state
        setNumberUsers(response.data);
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
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Users',
        data: [100, 50, 200, 25, 300, 350], // Replace with your actual data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  Chart.register(LinearScale);
  Chart.register(CategoryScale);
  Chart.register(LineElement);
  Chart.register(PointElement);

  const percentage = 25;
  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5 grid grid-cols-2 gap-4'>
      <div className='w-[95%] h-[150px] bg-customGray shadow-xl flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-bold text-gray-600'>Total number of users :</h1>
        <h1 className='text-[25px] font-bold text-red-600'>{numberUsers}</h1>
      </div>
      <div className='w-[95%] h-[150px] bg-customGray shadow-xl  flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-bold text-gray-600'>Total number of apartments :</h1>
        <h1 className='text-[25px] font-bold text-green-600'>124582</h1>
      </div>
      <div className='w-[95%] h-[150px] bg-customGray shadow-xl  flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-bold text-gray-600'>Total number of rental posts :</h1>
        <h1 className='text-[25px] font-bold text-blue-600'>124582</h1>
      </div>
      <div className='w-[95%] h-[150px] bg-customGray shadow-xl  flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-bold text-gray-600'>Total number of requests :</h1>
        <h1 className='text-[25px] font-bold text-yellow-500'>124582</h1>
      </div>
      <div className='w-[95%] h-auto bg-customGray shadow-xl  flex flex-col justify-center items-center'>
        <h2 className='text-[18px] font-bold text-gray-600'>Number of Users last 6 Months</h2>
        <Line data={data} options={options} />
      </div>
      <div className='w-[95%] h-auto  shadow-xl  flex flex-col justify-center items-center bg-customGray '>
      <h1 className='text-[25px] font-bold text-gray-600 mb-5'>Peccentage of connected users:</h1>
      <CircleIndicator percentage={connectedUsersPercentage} />
       
        </div>
      
      
    </div>
  );
};

export default AdminDashboard;

import React,{useState} from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, LineElement, PointElement } from "chart.js";
import CircleIndicator from './CircleIndicator';

const AdminDashboard = () => {
  const [connectedUsersPercentage, setConnectedUsersPercentage] = React.useState(25);
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
        <h1 className='text-[25px] font-bold text-red-600'>124582</h1>
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

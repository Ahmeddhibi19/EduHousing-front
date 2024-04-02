import React,{useState} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const loginImage = require('../../Assets/DAB03919-10470989.webp');



const Login = () => {
    const [pass,setPass]=useState(false);

    const togglepassword=()=>{
        setPass((prev)=>!prev);
        console.log(pass)
    }


  return (
    <div className='w-screen h-screen bg-customGray  flex items-center justify-center flex-row  '>
        <div className='w-[300px] h-[500px] hidden sm:hidden md:hidden lg:block  rounded-tr-lg'>
                 <img src={loginImage} alt=""  
                className='w-[300px] h-[500px] object-cover rounded-tl-lg rounded-bl-lg'/>

        </div>
        <div className='relative w-screen h-screen bg-white sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-[300px] lg:h-[500px]  rounded-tr-lg rounded-br-lg'>
            <img src={loginImage} alt="" className='absolute inset-0 visible w-full h-full object-cover rounded-tl-lg rounded-bl-lg sm:visible md:visible lg:hidden filter blur-sm' />
            <div 
            className=' absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-25  '
            >
                <h1 className='text-2xl font-bold text-center mb-[50px]'>Login</h1>
                <p className='px-3  mb-[50px]'>Please enter a valid email and password ...</p>
                <form action="" className='w-full flex flex-col items-center px-5' onSubmit={e=> e.preventDefault()} >
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[270px]'>
                    <input 
                        type="text" 
                        className='w-full sm:w-full md:w-[300px] lg:w-[270px] border-2 border-gray-500 rounded-md mb-[20px] pl-3 focus:outline-none focus:border-green-500'
                        placeholder='Email'
                    />
                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[270px] flex '>

                        <input
                            type={pass ? 'text' : 'password'}
                            className=' w-full sm:w-full md:w-[300px] lg:w-[270px] border-2 border-gray-500 rounded-md pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='Password'
                        />
                        <button onClick={togglepassword} className='absolute top-[30px] sm:top-[30px] md::top-[63px] lg:top-[42px] m right-5 sm:right-5 md:right-[300px] lg:right-5 h-full px-3'>
                            {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                    
                  
                    
                    <input type="submit" className='w-full sm:w-full  md:w-[200px] lg:w-[200px] bg-submiButton text-white rounded-md text-[20px] cursor-pointer' value="Sign In"/>
                </form>
                <div className='flex flex-col items-center justify-center'>
                    <p className='mt-5'>don't have an account ?</p>
                    <a href="#" className='text-blue-500 underline'>Sign Up</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
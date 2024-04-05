import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock,faLocationDot ,faUser,faPhone  } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
    const [pass,setPass]=useState(false);
    const[over,setOver]=useState(false);
    const [userType, setUserType] = useState('');
    const [college, setCollege] = useState('');

    const togglepassword=()=>{
        setPass((prev)=>!prev);
        console.log(pass)
    }
    const toggleOver=()=>{
        setOver((prev)=>!prev);
        console.log(over);
    }
    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };
  return (
    <div className='w-screen h-full bg-customGray  flex items-center justify-center flex-row '>
        <div className='w-screen h-full sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-[600px] lg:h-full bg-white flex flex-col items-center '>
            <div className=' w-full h-2 bg-submiButton top-10'></div>
            <h1 className='text-[25px] font-bold mb-3 mt-4'>Registration form</h1>
            <p className='mb-4'>Please fill the form below to register...</p>
            <form 
            action="" 
            onSubmit={e=> e.preventDefault()}
            className='w-full h-full flex flex-col px-3 ml-4'
            >
                <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                    <p className='text-red-600 mr-2'>* </p>
                    <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                        <FontAwesomeIcon icon={faEnvelope}  />
                    </div>
                        <input 
                        type="email" 
                        className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                        placeholder='Email'
                        required
                        />

                </div>
                <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                    <p className='text-red-600 mr-2'>* </p>
                    <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                        <FontAwesomeIcon icon={faLock}  />
                    </div>
                        <input 
                        type={pass ? 'text' : 'password'}
                        className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                        placeholder='password'
                        required
                        />
                        <button onClick={togglepassword} className='h-[30px] '>
                                {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>

                </div>
                <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                    <p className='text-red-600 mr-2'>* </p>
                    <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                        <FontAwesomeIcon icon={faLock}  />
                    </div>
                        <input 
                        type={pass ? 'text' : 'password'}
                        className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                        placeholder='retype password'
                        required
                        />
                        <button onClick={togglepassword} className='h-[30px] '>
                                {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>

                </div>
                <div className='w-full flex flex-row justify-between'>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faUser}  />
                        </div>
                            <input 
                            type='text'
                            className='w-[100px] sm:w-full md:w-[150px] lg:w-[150px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='First  Name'
                            required
                            />
                        

                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faUser}  />
                        </div>
                            <input 
                            type='text'
                            className='w-[100px] sm:w-full md:w-[150px] lg:w-[150px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='Last Name'
                            required
                            />
                        

                    </div>
                </div>
                <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                    <p className='text-red-600 mr-2'>* </p>
                    <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                        <FontAwesomeIcon icon={faLocationDot}  />
                    </div>
                        <input 
                        type="text" 
                        className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                        placeholder='Address'
                        required
                        />

                </div>
                <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                    <p className='text-red-600 mr-2'>* </p>
                    <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                        <FontAwesomeIcon icon={faPhone}  />
                    </div>
                        <input 
                        type="text" 
                        className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                        placeholder='Phone number'
                        required
                        />

                </div>
                <div className='w-[400px] flex flex-row mb-[30px]'>
                        <input type="radio" id="student" name="userType" value="student" onChange={handleUserTypeChange} className='text-green-600'/>
                        <label htmlFor="student" className='font-bold'>Student</label>
                        <input type="radio" id="homeowner" name="userType" value="homeowner" onChange={handleUserTypeChange} className='ml-[50px]'/>
                        <label htmlFor="homeowner" className='font-bold'>Homeowner</label>
                    </div>
                    {userType === 'student' && (
                        <div>
                            <p className='mb-[10px]'>Select a college</p>
                            <select value={college} onChange={(e) => setCollege(e.target.value)}
                                 className='w-full sm:w-full md:w-[437px] lg:w-[477px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'>
                                <option value="college1">College 1</option>
                                 <option value="college2">College 2</option>
                                <option value="college3">College 3</option>
                            </select>
                        </div>
                       
                    )}
                     <p className='mb-7'><span className='text-red-600 mr-2 mb-7'>*</span> : required</p> 
                    <div className='w-full flex justify-center'>
                    <input 
                    type="submit" 
                    className='w-full sm:w-full  md:w-[400px] lg:w-[400px] bg-submiButton text-white  text-[20px] cursor-pointer' 
                    value="Register"
                    onClick={()=>toggleOver()}
                    />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <p className='mt-5'>have an account ?</p>
                    <a href="#" className='text-blue-500 underline'>Sign In</a>
            </div>

            </form>
            

        </div>
        {
            over?(
                <div className='absolute w-screen h-[900px] bg-black bg-opacity-35 flex justify-center items-center'>
                    <div className='w-[500px] h-[140px] bg-white rounded-md p-5 flex justify-center items-center flex-col'>
                          <p className='text-submiButton font-bold'> Congratulation</p>
                         <p >We have sent you a verification link to the provided  email address.... Please note that the link expires after 30minute </p>
                         <button className='w-[70px] bg-red-500 rounded-md text-white font-bold mt-5'   onClick={()=>toggleOver()}>Cancel</button>
                    </div>
                </div>

            ):null
        }
        

    </div>
  )
}

export default Register
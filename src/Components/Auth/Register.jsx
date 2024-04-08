import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock, faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import ServerResponse from '../ServerResponse';
import axios from 'axios';

const Register = () => {
    const [pass, setPass] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [userType, setUserType] = useState('');
    const [college, setCollege] = useState('');
    const [calledColleges, setCalledColleges] = useState([]);
    const[confirmpass,setConfirmpass]=useState("")
    const[user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber:'',
        role:userType,
        address:''
    });
    const [responseData, setResponseData] = useState('');
    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:8081/api/EduHousing/v1.0.0/college/findAll';

        // Make a GET request using Axios
        axios.get(apiUrl)
            .then(response => {
                // Set the colleges state with the response data
                setCalledColleges(response.data);

            })
            .catch(error => {
                // Handle error if request fails
                console.error('Error fetching colleges:', error);
            });
    }, []);

    const togglepassword = () => {
        setPass((prev) => !prev);
        console.log(pass)
    }
    /*const toggleOver=()=>{
        setOver((prev)=>!prev);
        console.log(over);
    }*/
    const handleUserTypeChange = (e) => {
        const selectedUserType = e.target.value;
        setUserType(selectedUserType);
        setUser(prevUser => ({ ...prevUser, role: selectedUserType }));
    };
    
    const handleSubmit = () => {
        if (!user.firstName || !user.lastName || !user.email || !user.password || !user.phoneNumber || !user.address) {
            // If any required field is empty, display an error message or handle it as needed
            console.error('All fields are required');
            return;
        }
        if (!user.role) {
            console.error('User type is required');
            return;
        }
        if (user.role === 'STUDENT' && !college) {
            console.error('College selection is required for student registration');
            return;
        }
        if (user.role === 'STUDENT') {
            // Assuming user and college_id are required fields for student registration
            const studentData = {
                ...user,
                college_id: college // Assuming college is the selected college ID
            };
            
            // Make a POST request to save the student
            axios.post(`http://localhost:8081/api/EduHousing/v1.0.0/student/create/${college}`, studentData)
                .then(response => {
                    // Handle success response
                    setResponseData(response.data);
                    console.log('Student saved successfully:', response.data);
                })
                .catch(error => {
                    // Handle error response
                    console.error('Error saving student:', error);
                    setResponseData("error saving the student");
                });
                setOverlay((prev) => !prev);
        } else {
            axios.post(`http://localhost:8081/api/EduHousing/v1.0.0/homeowner/create`,user)
            .then((response) => {
                setResponseData(response.data);
            })
            .catch(error => {
                // Handle error response
                console.error('Error saving student:', error);
                setResponseData("error saving the student");
            });
            setOverlay((prev) => !prev);
            // Handle homeowner registration (if needed)
            // This part can be implemented similar to the student registration
        }
    
       
    }
    return (
        <div className='w-screen h-full bg-customGray  flex items-center justify-center flex-row '>
            <div className='w-screen h-full sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-[600px] lg:h-full bg-white flex flex-col items-center '>
                <div className=' w-full h-2 bg-submiButton top-10'></div>
                <h1 className='text-[25px] font-bold mb-3 mt-4'>Registration form</h1>
                <p className='mb-4'>Please fill the form below to register...</p>
                <form
                    action=""
                    onSubmit={e => e.preventDefault()}
                    className='w-full h-full flex flex-col px-3 ml-4'
                >
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                            type="email"
                            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='Email'
                            onChange={(e)=>setUser({...user,email: e.target.value})}
                            required
                        />

                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                            type={pass ? 'text' : 'password'}
                            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='password'
                            onChange={(e)=>setUser({...user,password:e.target.value})}
                            required
                        />
                        <button onClick={togglepassword} className='h-[30px] '>
                            {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>

                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                            type={pass ? 'text' : 'password'}
                            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='retype password'
                            onChange={(e)=>setConfirmpass(e.target.value)}
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
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <input
                                type='text'
                                className='w-[100px] sm:w-full md:w-[150px] lg:w-[150px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                                placeholder='First  Name'
                                onChange={(e)=>setUser({...user,firstName:e.target.value})}
                                required
                            />


                        </div>
                        <div className='w-full sm:w-full md:w-[300px] lg:w-[700px] flex flex-row'>
                            <p className='text-red-600 mr-2'>* </p>
                            <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <input
                                type='text'
                                className='w-[100px] sm:w-full md:w-[150px] lg:w-[150px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                                placeholder='Last Name'
                                required
                                onChange={(e)=>setUser({...user,lastName:e.target.value})}
                            />


                        </div>
                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <input
                            type="text"
                            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='Address'
                            required
                            onChange={(e)=>setUser({...user,address:e.target.value})}
                        />

                    </div>
                    <div className='w-full sm:w-full md:w-[300px] lg:w-[600px] flex flex-row'>
                        <p className='text-red-600 mr-2'>* </p>
                        <div className='w-[35px] h-[26px]  border-[1px] border-gray-500 flex justify-center items-center '>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <input
                            type="text"
                            className='w-full sm:w-full md:w-[437px] lg:w-[437px] border-[1px] border-gray-500  pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            placeholder='Phone number'
                            required
                            onChange={(e)=>setUser({...user,phoneNumber:e.target.value})}
                        />

                    </div>
                    <div className='w-[400px] flex flex-row mb-[30px]'>
                        <input type="radio" id="student" name="userType" value="STUDENT" onChange={handleUserTypeChange} className='text-green-600' />
                        <label htmlFor="student" className='font-bold'>Student</label>
                        <input type="radio" id="homeowner" name="userType" value="HOMEOWNER" onChange={handleUserTypeChange} className='ml-[50px]' />
                        <label htmlFor="homeowner" className='font-bold'>Homeowner</label>
                    </div>
                    {userType === 'STUDENT' && (
                        <div>
                            <p className='mb-[10px]'>Select a college</p>
                            <select
                                value={college}  // Assuming college state holds the selected college ID
                                onChange={(e) => setCollege(e.target.value)}
                                className='w-full sm:w-full md:w-[437px] lg:w-[477px] border-[1px] border-gray-500 pl-3 mb-[50px] focus:outline-none focus:border-green-500'
                            >
                                <option value="">Select a college</option> {/* Optional default option */}
                                {calledColleges.map((college) => (
                                    <option key={college.id} value={college.id}>{college.name}</option>
                                ))}
                            </select>
                        </div>

                    )}
                    <p className='mb-7'><span className='text-red-600 mr-2 mb-7'>*</span> : required</p>
                    <div className='w-full flex justify-center'>
                        <input
                            type="submit"
                            className='w-full sm:w-full  md:w-[400px] lg:w-[400px] bg-submiButton text-white  text-[20px] cursor-pointer'
                            value="Register"
                            onClick={() => handleSubmit()}
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='mt-5'>have an account ?</p>
                        <NavLink to="/" className='text-blue-500 underline'>Sign In</NavLink>
                    </div>

                </form>


            </div>
            {overlay ? <ServerResponse onClose={() => setOverlay(false)} responseData={responseData} /> : null}
            {
                /*over?(
                    <div className='absolute w-screen h-[900px] bg-black bg-opacity-35 flex justify-center items-center'>
                        <div className='w-[500px] h-[140px] bg-white rounded-md p-5 flex justify-center items-center flex-col'>
                              <p className='text-submiButton font-bold'> Congratulation</p>
                             <p >We have sent you a verification link to the provided  email address.... Please note that the link expires after 30minute </p>
                             <button className='w-[70px] bg-red-500 rounded-md text-white font-bold mt-5'   onClick={()=>toggleOver()}>Cancel</button>
                        </div>
                    </div>
    
                ):null*/
            }


        </div>
    )
}

export default Register
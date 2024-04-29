import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const GetUser = () => {
    const {token}=useParams();
    const navigate=useNavigate();
    useEffect(() => {
        // Store the token in localStorage
        localStorage.setItem('accessToken', token);
    }, [token]);
    useEffect(() => {
        // Decode the token
        const accessToken = localStorage.getItem("accessToken");
        const decodedToken = jwtDecode(accessToken);
        const userId=decodedToken.id;
        localStorage.setItem("userId",userId)

        // Redirect user based on role
        if (decodedToken.role.some(role => role.authority === 'ROLE_STUDENT')) {
            
            axios.get(`http://localhost:8081/api/EduHousing/v1.0.0/student/${userId}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((res)=>{
                localStorage.setItem("fullname",res.data.firstName+ " "+res.data.lastName);
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("phoneNumber",res.data.phoneNumber)
                axios.get(`http://localhost:8081/mongouser/${res.data.email}`,{
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then((res)=>{
                    localStorage.setItem("mongoId",res.data)
                })
            }).catch((err)=>{
                console.log(err);
            })
           
            navigate("/student");
        } else if (decodedToken.role.some(role => role.authority === 'ROLE_HOMEOWNER')) {
            axios.get(`http://localhost:8081/api/EduHousing/v1.0.0/homeowner/${userId}`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((res)=>{
                localStorage.setItem("fullname",res.data.firstName+ " "+res.data.lastName);
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("phoneNumber",res.data.phoneNumber)
                axios.get(`http://localhost:8081/mongouser/${res.data.email}`,{
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }).then((res)=>{
                    localStorage.setItem("mongoId",res.data)
                })
            }).catch((err)=>{
                console.log(err);
            })
            navigate("/homeowner");
        } else {
            navigate("/"); // Default redirect
        }
    }, []);


  return (
    <div>
        <a href="">dddddd</a>
    </div>
  )
}

export default GetUser
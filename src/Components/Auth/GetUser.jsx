import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

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
            navigate("/student");
        } else if (decodedToken.role.some(role => role.authority === 'ROLE_HOMEOWNER')) {
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
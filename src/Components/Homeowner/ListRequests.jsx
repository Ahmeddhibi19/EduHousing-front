import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import { listOfRequests } from './requests';
import ServerResponse from '../ServerResponse';

const ListRequests = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const { rental_id } = useParams();
 const [overlay, setOverlay] = useState(false);
 const [accepted, setAccepted] = useState();
 const [validated, setValidated] = useState();

 useEffect(() => {
    const requests = [...listOfRequests];
    const hasAccepted = requests.some(request => request.STATUS === "ACCEPTED");
    const hasValidated = requests.some(request => request.STATUS === "VALIDATED");
    const acceptedRequests = listOfRequests.filter(request => request.STATUS === 'ACCEPTED');
    setAccepted(acceptedRequests.length);
    const validatedRequests = listOfRequests.filter(request => request.STATUS === 'VALIDATED');
    setValidated(validatedRequests.length);
 }, []);

 const handleOverlay = () => {
    setOverlay((prev) => !prev);
 };

 const handleAccept = () => {
    // Implement your logic for accepting a request
 };

 const handleValidate = () => {
    // Implement your logic for validating a request
 };

 const handleReject = () => {
    // Implement your logic for rejecting a request
 };

 const handleRemoveAcceptance = () => {
    // Implement your logic for removing acceptance
 };

 return (
    <div className='w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px]'>
      {loading ? (
        <div className='w-full h-screen sm:ml-2 fixed flex justify-center items-center'>
          <Spinner className='' />
        </div>
      ) : (
        <div className='w-full h-auto p-3 flex flex-col'>
          <div className='w-full flex justify-center my-4'>
            <h1 className='text-[25px] font-bold text-gray-500'>Associated request list with rental post id : {rental_id}</h1>
          </div>
          {listOfRequests.map((request, index) => (
            <div
              key={index}
              className={`w-full h-auto flex flex-col lg:flex-row p-2 border-2 shadow-md ${
                request.STATUS === "PENDING" ? 'border-gray-500 bg-customGray' :
                (request.STATUS === "ACCEPTED" ? 'border-submiButton bg-green-50' : 'border-[#02D4DF] bg-blue-50')
              } rounded-md mb-3`}
            >
              <h1 className='w-full lg:w-[33%] font-bold'>{request.email}</h1>
              <p className='w-full h-auto lg:w-[33%]'>{request.content}</p>
              <div className='w-full h-full lg:w-[33%] flex justify-around items-center'>
                {request.STATUS === "VALIDATED" ? (
                 <div className='w-full h-full lg:w-[33%] flex justify-center items-center'>
                    <div className='w-[90px] bg-[#02D4DF] p-2 text-white rounded-md text-center'>Validated</div>
                 </div>
                ) : (
                 request.STATUS === "ACCEPTED" ? (
                    <div className='w-full flex flex-row justify-around'>
                      <div className={`w-[90px] bg-red-600 p-2 text-white rounded-md text-center `}>remove</div>
                      <div className={`w-[90px] bg-[#02D4DF] p-2 text-white rounded-md text-center `}>validate</div>
                    </div>
                 ) : (
                  <div className='w-full flex flex-row justify-around'>
                  <div className={`w-[90px]  p-2 text-white rounded-md text-center ${
                      accepted > 0 || validated > 0 ? 'bg-gray-500 pointer-events-none cursor-not-allowed' : 'bg-red-600'
                  }`}>reject {accepted}</div>
                  <div
                      className={`w-[90px]  p-2 text-white rounded-md text-center ${
                          accepted > 0 || validated > 0 ? 'bg-gray-500 pointer-events-none cursor-not-allowed' :'bg-submiButton' }
                      }`}
                      onClick={() => handleOverlay()}
                  >
                      accept
                  </div>
              </div>
              
                 )
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
    </div>
 );
};

export default ListRequests;

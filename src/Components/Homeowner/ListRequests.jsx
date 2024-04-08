import React, { useState }  from 'react' 
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner';
import { listOfRequests } from './requests';
import ServerResponse from '../ServerResponse';

const ListRequests = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const {rental_id}=useParams();
  const [overlay, setOverlay] = useState(false);
  const handleOverlay = () => {
    setOverlay((prev) => !prev);
    console.log(overlay)
}
var accepted = 0;
var requests = [...listOfRequests];
requests.forEach((request) => {
  if (request.STATUS === "ACCEPTED") {
    accepted += 1;
  }
});
var validated = 0;
var requests = [...listOfRequests];
requests.forEach((request) => {
  if (request.STATUS === "VALIDATED") {
    validated += 1;
  }
});
const handleAccept=()=>{

}
const handleValidate=()=>{

}
const handleReject=()=>{

}
const handleRemoveAcceptance=()=>{

}
  return (
    <div className=' w-full sm:w-full md:w-full lg:w-[80%] h-auto sm:ml-2 lg:ml-[20%] mt-[63px] '>
      {
         loading ? (
          <div className='w-full  h-screen sm:ml-2   fixed flex justify-center items-center'>
              <Spinner className='' />
          </div>

      ) : (
        <div className='w-full h-auto p-3 flex flex-col '>
          <div className='w-full flex justify-center my-4'>
            <h1 className='text-[25px] font-bold text-gray-500'>Associated request list with rental post id : {rental_id}</h1>
          </div>
          {
            requests.map((request,index)=>{
              console.log('Rendering request:', request);
              console.log('Accepted:', accepted);
              console.log('Validated:', validated);
              return (
                <div 
                  key={index} 
                  className={`w-full h-auto flex flex-col lg:flex-row p-2 border-2 shadow-md ${
                    request.STATUS === "PENDING" ? 'border-gray-500 bg-customGray' : 
                    (request.STATUS === "ACCEPTED" ? 'border-submiButton bg-green-50' : 'border-[#02D4DF] bg-blue-50')
                  } rounded-md mb-3`}
                >              
                  <h1 className='w-full lg:w-[33%] font-bold'>ahmed.dhibi123@gmail.com</h1>
                  <p className='w-full h-auto lg:w-[33%]'>{request.content}</p>
                  <div className='w-full h-full lg:w-[33%] flex justify-around items-center'>
                  {
                      request.STATUS === "VALIDATED" ? (
                        <div className='w-full h-full lg:w-[33%] flex justify-center items-center'>
                          <div className='w-[90px] bg-[#02D4DF] p-2 text-white rounded-md text-center'>Validated</div>
                        </div>
                      ) : (
                        request.STATUS === "ACCEPTED" ? (
                          <div className='w-full flex flex-row justify-around'>
                            <div className={`w-[90px] bg-red-600 p-2 text-white rounded-md text-center `}>remove</div>
                            <div className={`w-[90px] bg-submiButton p-2 text-white rounded-md text-center `}>validate</div>
                          </div>
                        ) : (
                          <div className='w-full flex flex-row justify-around'>
                            <div className={`w-[90px] bg-red-600 p-2 text-white rounded-md text-center     ${accepted > 0 || validated > 0 ? 'bg-gray-500 pointer-events-none cursor-not-allowed' : null}`}>reject</div>
                            <div className={`w-[90px] bg-submiButton p-2 text-white rounded-md text-center ${accepted > 0 || validated > 0 ? 'bg-gray-500 pointer-events-none cursor-not-allowed' : null}`} onClick={() => handleOverlay()}>accept</div>
                          </div>
                        )
                      )
                  }

                   
                  </div>
                </div>
              );
            })
          }

        </div>
      )
      }
      {overlay ? <ServerResponse onClose={() => setOverlay(false)} /> : null}
    </div>
  )
}

export default ListRequests

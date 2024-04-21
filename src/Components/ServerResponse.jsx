import React, { useState } from 'react';
import Spinner from './Spinner';

const ServerResponse = ({ onClose ,responseData }) => {
    const [loading, setLoading] = useState(true);

    const handleOk = () => {
        onClose();
        window.location.reload();
        // Perform any necessary actions when OK button is clicked
    };

    const handleCancel = () => {
        onClose();
        window.location.reload();
        // Perform any necessary actions when Cancel button is clicked
    };

    return (

        <div className='fixed  w-full h-full inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30'>
            {
               responseData === null || responseData === '' ? (
                    <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[10%] bg-white p-6 rounded-md flex justify-center'>
                        <Spinner className='' />
                    </div>


                ) : (
                    <div className='w-[90%] sm:w-[90%] md:w-[90%] lg:w-[40%] bg-white p-6 rounded-md '>
                        <div className='w-full font-bold flex flex-col justify-center text-center'>
                        <p >
                            {responseData}
                        </p>
                        </div>
                        
                        <div className='flex justify-between mt-4'>
                            <button
                                className='px-4 py-2 bg-red-600 text-white rounded-md mr-2'
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className='px-4 py-2 bg-submiButton text-white rounded-md'
                                onClick={handleOk}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default ServerResponse;

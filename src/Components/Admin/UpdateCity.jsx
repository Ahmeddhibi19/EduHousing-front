import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateCity = () => {
    const {id} = useParams();
  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>{id}</div>
  )
}

export default UpdateCity
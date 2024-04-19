import React from 'react'
import { useParams } from 'react-router-dom'

const AllRentalPosts = () => {
  const {id} =useParams();
  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>AllRentalPosts : {id}</div>
  )
}

export default AllRentalPosts
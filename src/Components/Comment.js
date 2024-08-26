import React from 'react'
import UserIcon from '../utils/UserIcon.png';

const Comment = ({data}) => {
    const {name, text} = data;
  return (
    <div className='my-4'>
        <div className='flex bg-gray-200 rounded-md '>
            <img src={UserIcon} className='w-10 mx-4' alt="user" />
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Comment

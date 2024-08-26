import React from 'react'
import UserIcon from '../utils/UserIcon.png'

const ChatMessage = ({name, text}) => {
  return (
    <div className='pl-2 mb-2 flex shadow-md pb-1 bg-slate-200'>
      <img src={UserIcon} className='w-[40px] mr-2' alt="userIcon" />
      <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ChatMessage

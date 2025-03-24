import React from 'react'
import { LIVE_CHAT_ICON, USER_ICON } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex h-14 w-[140px] bg-gray-100 p-2'>
        <div className='h-6 w-6'>
        <img  src={USER_ICON}></img>
        </div>
        <div className='flex text-sm w-full'>
        <span className='font-extrabold'>{name}</span>
        <span className=' ml-2 pl-2'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage
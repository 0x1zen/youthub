import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-300 m-3 h-10 min-w-20 max-w-40 rounded-xl hover:border-1 border-gray-600'>{name}</button>
    </div>
  )
}

export default Button;

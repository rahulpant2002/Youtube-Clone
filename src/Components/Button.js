import React from 'react'

const Button = ({btnName}) => {
  return (
    <div>
      <button className=' m-2 py-2 px-4 bg-gray-300 rounded-md font-semibold'>{btnName}</button>
    </div>
  )
}

export default Button

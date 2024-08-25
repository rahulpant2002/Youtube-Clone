import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const name = ['ALL', 'Programing', 'Adventure', 'Cricket', 'Gaming', 'Cooking', 'Wildlife', 'Indian Music', 'Watched', 'New to You'];
  return (
    <div className='flex gap-2'>
      {name.map((x, index)=><Button key={index} btnName={x}/>)}
    </div>
  )
}

export default ButtonList

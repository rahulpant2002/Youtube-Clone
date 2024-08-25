import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const {isOpenMenu} = useSelector((store)=>store?.app);
  return (
    isOpenMenu ? (<div className='w-[90%]'>
      <ButtonList/>
      <VideoContainer/>
    </div>) : (<div className='w-[100%]'>
      <ButtonList/>
      <VideoContainer/>
    </div>)
  )
}

export default MainContainer

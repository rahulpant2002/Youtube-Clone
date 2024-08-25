import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/ReduxStore/appSlice';
import { useParams } from 'react-router-dom';

const WatchPage = () => {
    const {videoId} = useParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    }, []);
    
  return (
    <div className='pt-5 pl-[60px] '>
      <iframe className='w-[1000px] h-[500px] rounded-md' src={`https://www.youtube.com/embed/${videoId}`} ></iframe>
    </div>
  )
}

export default WatchPage

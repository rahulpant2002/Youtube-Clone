import React from 'react'
import UserIcon from '../utils/UserIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, toggleSubscribe } from '../utils/ReduxStore/videoStatSlice';

const WatchVideoInfo = ({info}) => {
  const dispatch = useDispatch();
  const isSubscribed = useSelector(state => state?.videoStat?.isSubscribed);
  const isLiked = useSelector(state => state?.videoStat?.isLiked);

  const title = info?.snippet?.title;
  const channelTitle = info?.snippet?.channelTitle;

  const handleLikeBtn = (id)=>{
    dispatch(toggleLike(id));
  
  }

  const handleSubsBtn = (id)=>{
    dispatch(toggleSubscribe(id));
  }

  return (
    <div className='pl-14'>
      <div className='text-xl font-semibold py-2'>{title}</div>

      <div className='flex gap-4'>
        <div className='flex '> <img src={UserIcon} className='w-[40px] mr-2' alt="userIcon" /> <p className='font-bold my-auto'>{channelTitle}</p></div>
        <button onClick={()=>handleSubsBtn(info?.id)} className='bg-gray-300 px-4 py-2 rounded-md'> {isSubscribed[info?.id] ? "Subscribed" : "Subscribe"} </button>
        <button onClick={()=>handleLikeBtn(info?.id)} className='bg-gray-300 px-4 py-2 rounded-md'> {isLiked[info?.id] ? "Liked" : 'Like'} </button>
      </div>
    </div>
  )
}

export default WatchVideoInfo;

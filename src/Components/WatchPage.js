import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/ReduxStore/appSlice';
import { useParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import { API_KEY } from '../utils/constant';
import WatchVideoInfo from './WatchVideoInfo';

const WatchPage = () => {
    const {videoId} = useParams();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
        getVideoInfo();
    }, []);

    const getVideoInfo = async()=>{
      const info = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      const json = await info.json();
      setInfo(json?.items[0]);
    }
    
  return (
    <div>
      <div className='pt-5 pl-[60px]'>
        <iframe className='w-[1000px] h-[500px] rounded-md' src={`https://www.youtube.com/embed/${videoId}`} ></iframe>
      </div>
      <WatchVideoInfo info={info} />
      <CommentContainer/>
    </div>
  )
}

export default WatchPage

import React, { useEffect, useState } from 'react'
import { YoutubeVideosAPI } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videosInfo, setVideosInfo] = useState([]);

  useEffect(()=>{
    fetchVideos();
  }, []);

  const fetchVideos = async()=>{
    const data = await fetch(YoutubeVideosAPI);
    const json = await data.json();
    setVideosInfo(json.items)
  }
  
  return (
    <div className='flex flex-wrap justify-evenly '>
      {videosInfo?.map((videoInfo) => <Link to={'/watch/'+videoInfo.id} key={videoInfo.id
      }> <VideoCard info={videoInfo} /> </Link>)}
    </div>
  )
}

export default VideoContainer

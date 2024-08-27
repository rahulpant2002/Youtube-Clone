import React, { useEffect, useState } from 'react'
import { YoutubeVideosAPI } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ShimmerEffect from './ShimmerEffect';

const VideoContainer = () => {
  const [videosInfo, setVideosInfo] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const {ref, inView} = useInView();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetchVideos();
  }, []);
  
  const fetchVideos = async()=>{
    setLoading(true);

    let url = YoutubeVideosAPI;
    if(nextPageToken) url +=  `&pageToken=${nextPageToken}`

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVideosInfo(prevVideos => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      console.log(videosInfo);
    } 
    catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(inView && !loading) fetchVideos();
  }, [inView, loading])
  
  return (
    <div>
      <div className='flex flex-wrap '>
        {videosInfo?.map((videoInfo, index) => <Link to={'/watch/'+videoInfo.id} key={index}> <VideoCard info={videoInfo} /> </Link>)}
      </div>
      <div ref={ref}>
        {loading && <ShimmerEffect/>}
      </div>
    </div>
  )
}

export default VideoContainer;

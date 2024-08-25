import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

  return (
    <div className='w-[20rem] p-2 m-2 shadow-md cursor-pointer'>
      <img className='rounded-lg' src={thumbnails?.high?.url} alt="thumbnail" />
      <div className='font-bold py-2'>{title}</div>
      <div>{channelTitle}</div>
      <div>{viewCount} views</div>
    </div>
  )
}

export default VideoCard;

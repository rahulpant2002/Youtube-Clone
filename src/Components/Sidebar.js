import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {isMenuOpen} = useSelector(store=>store?.app);
  if(!isMenuOpen) return null;
  return (
    <div className=' m-2 shadow-lg w-[10%] flex flex-col gap-5'>

      <div className='shadow-md'>
          <ul className=' flex flex-col gap-2'>
            <Link to={'./'} className='hover:bg-gray-400 rounded-md'> <li className='p-2'>Home</li> </Link> 
            <li className='p-2'>Subscription</li>
            <li className='p-2'>Shorts</li>
          </ul>
      </div>

      <div className='shadow-md'>
        <h1 className='font-bold'>Subscription</h1>
          <ul className='flex flex-col gap-2'>
            <li className='p-2'>Music</li>
            <li className='p-2'>Sports</li>
            <li className='p-2'>Gaming</li>
            <li className='p-2'>Movies</li>
          </ul>
      </div>

      <div className='shadow-md'>
        <h1 className='font-bold'>Explore</h1>
          <ul>
            <li className='p-2'>Trending</li>
            <li className='p-2'>Shopping</li>
            <li className='p-2'>Film</li>
            <li className='p-2'>Live</li>
            <li className='p-2'>Podcast</li>
            <li className='p-2'>News</li>
          </ul>
      </div>

      <div className='shadow-md'>
        <h1 className='font-bold'>You</h1>
          <ul>
            <li className='p-2'>Your Channel</li>
            <li className='p-2'>History</li>
            <li className='p-2'>Playlists</li>
            <li className='p-2'>Liked Videos</li>
            <li className='p-2'>Watch Later</li>
            <li className='p-2'>Your Videos</li>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar

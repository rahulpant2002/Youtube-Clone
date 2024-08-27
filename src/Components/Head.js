import React, { useEffect, useState } from 'react'
import MenuIcon from '../utils/MenuIcon.jpg'
import YouTubeLogo from '../utils/YouTubeIcon.png'
import UserIcon from '../utils/UserIcon.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/ReduxStore/appSlice'
import { YoutubeSearchSuggestionAPI } from '../utils/constant'
import { addCache } from '../utils/ReduxStore/cacheSlice'

const Head = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(true);

  const dispatch = useDispatch();
  const storage = useSelector(store=>store?.cache?.storage);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(storage[searchText]) setSuggestions(storage[searchText]);
      else getSuggestions();
    }, 200)

    return ()=>{
      clearTimeout(timer);
    }

  }, [searchText])

  const getSuggestions = async()=>{
    const data = await fetch(YoutubeSearchSuggestionAPI+searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(addCache({
      [searchText] : json[1],
    }))
  }

  const handleMenuIcon = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='flex shadow-lg pb-2'>
      <div className='flex w-[30%]'>
        <img src={MenuIcon} className='h-12 cursor-pointer' onClick={handleMenuIcon} alt="Menu Icon" />
        <img src={YouTubeLogo} className='h-12' alt='Youtube Logo'/>
      </div>

      <div className='pt-2 w-[50%]'>
        <div className='flex'>
          <input type="text"
            value={searchText} 
            onInput={()=>setShowSuggestionBox(true)}    
            onChange={e=>setSearchText(e.target.value)} 
            className='w-[95%] border border-gray-400 rounded-l-full px-4 py-2' placeholder=' Search' />
          <button className='font-bold rounded-r-full border border-gray-400 px-2 bg-gray-200'>Search</button>
        </div>

        {showSuggestionBox && <div className='absolute z-10 bg-white rounded-md shadow-md py-2 ' onMouseLeave={()=>setShowSuggestionBox(false)} >
          <ul >
            {suggestions.map(item=><li key={item} onPointerDown={()=>setSearchText(item)} className='w-[620px] cursor-pointer hover:bg-gray-200 px-3'>{item}</li>)}
          </ul>
        </div> }
      </div>

      <div className='w-[30%] flex justify-end gap-2 mr-2'>
        <img src={UserIcon} className='h-12 cursor-pointer' alt="User Icon" />
      </div>
    </div>
  )
}

export default Head;

import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/ReduxStore/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const textRef = useRef('');
    const messages = useSelector(store => store.chat.messages);

    useEffect(()=>{

        const id = setInterval(()=>{
            dispatch(addMessages({name : generateRandomName(), text : generateRandomMessage(30)}));
        }, 1500);

        return ()=> clearInterval(id);
    }, []);

    const handleSendBtn = ()=>{
        dispatch(addMessages({name:'Rahul Pant', text : textRef.current.value}))
        textRef.current.value = '';
    }

  return (
    <div className='ml-5'>
        <div className=' w-[400px] h-[500px] overflow-auto border border-black rounded-md '>
            <p className='mb-2 text-center font-bold text-xl'>Live Chat</p>

            <div className='flex flex-col-reverse'>
                {messages.map((msg, index) => <ChatMessage key={index} name={msg.name} text={msg.text} />)}
            </div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className='mt-2 w-[400px] '>
            <input ref={textRef} className=' rounded-md mr-2 border-black bg-gray-200 w-[85%] h-8 pl-3' type="text" placeholder='Chat Here...' />
            <button onClick={handleSendBtn} className=' bg-green-200 rounded-md px-2 h-8'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat;

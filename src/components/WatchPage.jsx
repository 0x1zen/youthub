import React, { useEffect } from 'react'
import { useParams,useSearchParams } from 'react-router';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice.jsx";
import CommentsContainer from './CommentsContainer.jsx';
import LiveChat from './LiveChat.jsx';
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId=searchParams.get("v");
  const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(
        closeMenu()
      )
    },[]);
    
  return (
    <div>
    <div className='flex w-full'>
      <div className='w-[calc(70%)] m-2'>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
       title="YouTube video player" frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='w-80 flex justify-center mx-auto my-0 shadow-2xl border-2'>
        <LiveChat></LiveChat>
      </div>
    </div>
    <div className='m-2 p-2 max-w-120'>
      <h1 className='font-bold'>Comments:</h1>
        <CommentsContainer></CommentsContainer>
    </div>
    </div>
  )
}

export default WatchPage;
import React, { useEffect } from 'react'
import { useParams,useSearchParams } from 'react-router';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice.jsx";
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
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
       title="YouTube video player" frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;
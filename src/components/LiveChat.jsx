import React from 'react'
import ChatMessage from './ChatMessage'
import {useEffect,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice.jsx';
import makeid from '../utils/helper.jsx';

var nameList = [
  'Time','Past','Future','Dev',
  'Fly','Flying','Soar','Soaring','Power','Falling',
  'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
  'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
  'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
  'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
  'Mine','Your','Worst','Enemy','Hostile','Force','Video',
  'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
  'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
  'Script','Writer','Near','Close','Open','Cube','Circle',
  'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
  'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
  'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
  'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
  'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
  'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
  'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
  'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
  'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
  'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
  'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

var index=0;
const LiveChat = () => {
    const [myMessage,setMyMessage]=useState("");

  const dispatch=useDispatch();

  useEffect(()=>{
    const i=setInterval(()=>{
      console.log("api polling");
      if(i<nameList.length){
        dispatch(addMessage({name:nameList[index],message:makeid(20)}));
        index++;
      }
    },1500);
    return ()=>{
      clearInterval(i);
    }
  },[]);
  const chatMessages=useSelector((store)=>store.chat.messages);
  const handleClick = ()=>{
    dispatch(addMessage({name:"CustomMessage",message:myMessage}));
    setMyMessage("");
  }
  return (
    <div>
      <div className='min-h-[350px] overflow-y-scroll flex flex-col-reverse'>
        <h1 className='font-bold'>Live Chat</h1>
        {chatMessages.map((chat,index)=>{
          const {name,message}=chat;
          return <ChatMessage key={index} name={name} message={message} ></ChatMessage>
        })}
    </div>
    <form className='flex' onSubmit={(e)=>{
      e.preventDefault();
      handleClick
      }}>
      <input className='border-2 border-black m-2' value={myMessage} onChange={(e)=>setMyMessage(e.target.value)}></input>
      <button className='border-2 border-black m-2' onClick={handleClick}>Submit</button>
    </form>
    </div>
    
  )
}

export default LiveChat
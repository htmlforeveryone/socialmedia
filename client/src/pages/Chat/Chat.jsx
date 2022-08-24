import React, { useEffect, useState } from 'react';
import LogoSearch from '../../components/LogoSearch/LogoSearch';
import {useSelector} from "react-redux"
import "./Chat.css"
import { userChats } from '../../api/ChatRequests';
import Conversation from '../../components/Conversation/Conversation';
import { Link } from 'react-router-dom';
import {UilSetting} from '@iconscout/react-unicons'
import Home from '../../img/home.png'
import Notify from '../../img/noti.png'
import Comment from '../../img/comment.png'
import ChatBox from '../../components/ChatBox/ChatBox';

const Chat =()=>{
  const {user}=useSelector((state)=>state.authReducer.authData)

  const [Chats ,setChats]=useState([])
  const [currentChat , setCurrentChat]=useState(null)


  useEffect(()=>{
      const getChats = async()=>{
        try {
          const {data}= await userChats(user._id)
         
          console.log(data)


          
        } catch (error) {
          console.log(error)

          
        }

      }
      getChats();
  },[user])


  return(
    <div className="Chat" >
      {/* {Left Side} */}
      <div className='Chat-container'>

      
      <div className="Left-side-chat">
      <LogoSearch/>
     
        <div className='Chat-list'>
        {Chats.map((chat)=>(
          <div onClick={()=>setCurrentChat(chat)}>
            <Conversation data={chat} currentUserId={user._id}/>
          </div>

        ))}
          
        </div>
      </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
          
            <div style={{width:'20rem' ,alighnSlef:'flex'}}>
            <div className="navIcons">
                    <Link to ='../home'>
                      <img src={Home} alt=""/>
                    </Link>
                    <UilSetting/>
                    <img src={Notify} alt=""/>
                    <Link to ='../chat'>
                    <img src={Comment} alt=""/>

                    </Link>
                </div>
                {/*  Chat Body */}

                <ChatBox chat={currentChat} currentUser={user._id}/>

            </div>


      </div>


    </div>
  )
}


export default Chat;
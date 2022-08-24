import React, { useEffect, useState } from 'react'
import { getMessages } from '../../api/MessageRequests';
import { getUser } from '../../api/UserRequest';





const ChatBox=({ chat, currentUser})=>{
    const [userData, setUserdata] =useState(null);
    const [messages,setMassages] =useState([]);


    useEffect(()=>{
        const userId=chat?.members?.find((id)=>id!==currentUser)
        const getUserData=async()=>{
            try{
                const{data}=await getUser(userId)
                setUserdata(data)
               
            }catch(error){
                console.log(error)
            }
        }
        if(chat!=null) getUserData();
    },[chat,currentUser])

    // fetchin msg data

    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const { data } = await getMessages(chat._id);
            setMassages(data);
            console.log(data)
          } catch (error) {
            console.log(error);
          }
        };
    
        if (chat !== null) fetchMessages();
      }, [chat]);
    
    return(
      <>
        <div className='ChatBox-container'>
            <>
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={
                      userData?.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER +
                          userData.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.firstname} {userData?.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
                <div className='Chat-body'>
                    {messages.map((message)=>(


                        <>
                            <div className={message.senderId===currentUser? "massage own" : "message"
                            } >

                                <span>{message.text}</span>
                                <span>{message.createdAt}</span>
                            </div>
                        </>

                        
                    )


                    )}
                </div>
            </>

        </div>
      </>
    )
}

export default ChatBox
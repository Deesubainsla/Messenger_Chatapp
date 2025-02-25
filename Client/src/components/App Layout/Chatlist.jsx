import React,{useEffect, useState, useContext} from 'react'
import ChatlistCard from '../Cards/ChatlistCard.jsx'
import axios from 'axios'
import { ncontext } from '../../utils/contextapi/Ncontext.jsx';

function Chatlist() {

  const [friends, setfriends] = useState([]);
  const {notification, fetchagain} = ncontext();
 
  useEffect(() => {
    const datafetch = async()=>{

      try {
        
        const {data} = await axios.get(`${import.meta.env.VITE_SERVER}/chat/getchat`,{
          withCredentials: true
        })

          // console.log("data ",data);
        setfriends(data.transformdata);
        // console.log("Chats fetched successfully:");
        // window.location.reload();   //for reload the page programatically from client side:

      } catch (error) {
        console.log("Error in chatlist:",error.response.data.message);
      }

    }

    datafetch();
  
    
  }, [notification, fetchagain])
  

  return <>
    <div className='h-full w-full px-2 py-4 bg-blue-300'>
      <div className='text-2xl shadow-lg border rounded-lg font-bold text-white flex justify-center mb-3 items-center'>My Chats</div>
      
      {friends.length==0 ? <div className='text-white'>No Chats Present please Add Friend</div> : friends.map((chat)=>(
          <div key={chat._id}>
              <ChatlistCard chat={chat} />
          </div>
      ))}
        {/* <ChatlistCard username={} id={} />
        <ChatlistCard/>
        <ChatlistCard/>
        <ChatlistCard/>
        <ChatlistCard/>
        <ChatlistCard/> */}
    </div>
    
  </>
}

export default Chatlist

import React,{useEffect, useState, useContext} from 'react'
import {useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import { Mycontext } from '../../utils/contextapi/Contextapi';
import { ncontext } from '../../utils/contextapi/Ncontext';


function ChatlistCard({chat}) {


  const navigate = useNavigate();
  const [newmsg, setnewmsg] = useState(0);
  const [isactive, setisactive] = useState(false);
  const {socket} = useContext(Mycontext);
  const {notification,setnotification} = ncontext();


  useEffect(() => {

    // console.log("in chatlistcard useeffect:")

    // if(user && socket.connected){
        
    // }
    if(socket){

        socket.emit('getonlinestatus');

        if(!chat.groupchat){
            socket.on('connected users',(usersid)=>{
    
                if(usersid.includes(chat.members[0])){
                    setisactive(true);
                }
                else{
                    setisactive(false);
                }
        
            })
        }
        
    
        return ()=>{
            if(!chat.groupchat){
                socket.off('connected users');
            }
            
        }

    }

    
   
  }, [socket])
  

  
//   const handlecardclick = async()=>{
//         try {
            
//             const output = await axios.get(`${import.meta.env.VITE_SERVER}/chat/getmychat?chatid=${id}`,{
//                         withCredentials: true
//             })
              
//             setselectedchat(output.data.mychat);
//             // console.log("selectedchat:", output.data.mychat);
//             navigate(`/chat/${id}`);

//         } catch (error) {
//             console.log(error.response.data.message);
//         }
//   }

    useEffect(() => {
        let count = 0;
        notification.forEach(msg => {
            if(msg.chat._id == chat._id){
                count++;
            }
        });

        setnewmsg(count);
    }, [notification])
    
    const handleclick = ()=>{
        setnewmsg(0);
        const filterednotification = notification.filter(msg=>(
                msg.chat._id.toString() !== chat._id.toString()
        ));
        setnotification(filterednotification);

        navigate(`/chat/${chat._id}`);
    }


  return <>
        <div onClick={handleclick}
         className={`w-full flex items-center h-[60px]  my-1 shadow-md overflow-hidden bg-white border rounded-lg ${newmsg?"border-4 border-green-600":""} `}>
            {/* <div className='h-full relative rounded-full overflow-hidden  shrink-0'>
                <img className='h-full w-full' src={avatar} alt="profile" />

                {isactive && <div className='bg-green-600 absolute top-[10%] right-[10%] rounded-full h-[12px] w-[12px] '></div>}
                
                     
                
            </div> */}
            <div className="relative">
                        <div className="w-14 h-14  rounded-full overflow-hidden ">
                            <img className='h-full w-full object-cover'
                                alt="Tailwind CSS chat bubble component"
                                src={chat.avatar}
                                // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />

                            {isactive && <div className='w-[15px] h-[15px] bg-green-500 absolute top-0 right-1 z-50 rounded-full'></div>}
                        </div>
            </div>
            
            <div className='w-full ml-2 truncate flex flex-col justify-center items-center'>
                <div className='w-full  truncate font-bold'>{chat.name}</div>
                
                {newmsg? (<div className='w-full truncate font-semibold'>{newmsg} New message</div>) : (chat.latestmsg && <div className='w-full truncate'>{chat.latestmsg.content}</div> )}

                

            
            </div>
        </div>
  </>
}

export default ChatlistCard
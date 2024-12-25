import React, { useEffect, useState, useRef, useContext } from 'react'
import Layout from '../components/Layout.jsx'
import { useParams, useNavigate } from 'react-router-dom';
import { Mycontext } from '../utils/contextapi/Contextapi.jsx';
import axios from 'axios';
import Chatmsg from '../components/common components/chatmsg.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import Profileblock from '../components/App Layout/Profileblock.jsx';
import { ncontext } from '../utils/contextapi/Ncontext.jsx';
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import {io} from 'socket.io-client'



function Chat() {

  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [mytyping, setmytyping] = useState(false);
  const [isyoutyping, setisyoutyping] = useState(false);
  const [selectedchat, setselectedchat] = useState(null);
  const [selecteduser, setselecteduser] = useState(null);
  const [drawerinput, setdrawerinput] = useState(false);


  //Audio files:
  const notificationsound = new Audio('/notificationrecieve.wav');
  const msgsend = new Audio('/msgsend.wav');
  const msgrecieve = new Audio('/msgrecieve.mp3');
  //files in public folder server as root:
  

  //The benefit of using useRef is accuracy and it doesn't cause rerender when useRef.current change:
  let chatcontainer = useRef(null);
  let timerref = useRef(null);
  let mytypingref = useRef(null);
  mytypingref.current = mytyping;
  const navigate = useNavigate();

  //This normal variable mytypingtrack will update only on internal rerender so the settimeout use the old value as it is called before rerender 
  //but  with useRef.current it update independently from rerender

  // var mytypingtrack = mytyping;
  

  useEffect(() => {
    //Solved a big and very common issue by using this of asynchronous usestate variables:
    mytypingref.current = mytyping;
    // mytypingref.current = mytyping;
  }, [mytyping])


  const { chatid } = useParams();
  // const {socket } = useSelector((state)=>state.reduxslice);
  const { socket } = useContext(Mycontext);
  const {setnotification} = ncontext();
  // console.log('Socket from frontend: ', socket);


 

  




  useEffect(() => {
    if (chatcontainer.current) {
      chatcontainer.current.scrollTop = chatcontainer.current.scrollHeight;
    }
  }, [messages])

  // const checknewnotification = ()=>{
  //     setnewnotification(prev => prev+1);
  // }

  // useEffect(() => {

  //   socket.on('messagerecieve', (newmsg) => {
  //     setmessages(prev => [...prev, newmsg]);
  //   })



  //   return () => {
  //     socket.off('messagerecieve');

  //   }

  // })

  useEffect(() => {

    // const handletyping = ()=>{
    //   console.log("handling typing in frontend:");
    //   setisyoutyping(true);
    // }
    // const handlestoptyping = ()=>{
    //   console.log("handling stop typing in frontend:");
    //   setisyoutyping(false);
    // }
    // const handlemessage = (newmsg)=>{
    //   console.log("handling messagerecive handler in frontend:")
    //   setmessages(prev => [...prev, newmsg]);
    // }

    if (socket) {
      // console.log("socket of chat cpmponent:", socket);
      socket.on('messagerecieve', (newmsg) => {
        if (chatid && newmsg.chat._id == chatid) {
          setmessages(prev => [...prev, newmsg]);
          msgrecieve.play();
        }
        else {
          setnotification(prev => [newmsg, ...prev]);
          notificationsound.play();
          // console.log("newmsg:",newmsg);
        }

      });//automatically get the parameter and can't write with(newmessage) because of direct invocation of function.
      socket.on("typing", (chat) => {
        // console.log("chat._id",chat._id);
        // console.log("chatid",chatid);
        if (chat._id == chatid) {
          console.log("in typing listner:")
          setisyoutyping(true);
        }

      });
      socket.on("stop typing", (chat) => {
        if (chat._id === chatid) {
          setisyoutyping(false);
        }
      });
    }





    return () => {
      if (socket) {
        socket.off('messagerecieve');
        socket.off('typing');
        socket.off('stop typing');
      }

    }

  }, [socket, chatid])
  //very important note:   
  //with useparams info change component will not unmount it just rerender so the use effect with dependency array [] with not run repetedly until you would not provide it the params field.







  const Handleclick = async (e) => {
    // console.log("e",e);
    e.preventDefault();

    if (mytypingref.current) {
      // console.log("in mytypingref block:")
      socket.emit('stop typing', selectedchat);
      setmytyping(false);
      clearTimeout(timerref.current);

    }


    if (input.trim() != '') {
      // console.log("inside Onsubmit logic:");


      // console.log("in formhandling block:")
      try {

        const res = await axios.post(`${import.meta.env.VITE_SERVER}/message/newmessage`, {
          chatid,
          content: input
        }, {
          withCredentials: true
        })

        // console.log('new message:', res.data);
        setinput('');
        setmessages(prev => [...prev, res.data.newmessage]);
        msgsend.play();
        socket.emit('new message', res.data.newmessage);

      } catch (error) {
        console.log(error.response.data.message);
      }
      // socket.emit('new message',input);

    }

  }

  useEffect(() => {
    if(selectedchat){(async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/user/getanyprofile?userid=${selectedchat?.otheruser?._id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        })

        setselecteduser(res.data?.user);
      } catch (error) {
        console.log(error.response.data.message);
      }
    })();}
  },[selectedchat])


  useEffect(() => {

    const fetchmsg = async () => {

      try {

        const res = await axios.get(`${import.meta.env.VITE_SERVER}/message/getmessages?chatid=${chatid}`, {
          withCredentials: true
        })

        const output = await axios.get(`${import.meta.env.VITE_SERVER}/chat/getmychat?chatid=${chatid}`, {
          withCredentials: true
        })

        setselectedchat(output.data.mychat);
        setmessages(res.data.messages);
        // setselectedchat(output.data.mychat);
        // console.log("myselectedchat", output.data.mychat);
        // console.log("messages",res.data.messages);
        // console.log("Messages fetched successfully");

      } catch (error) {
        console.log(error.response.data.message);
      }

    }

    fetchmsg();

  }, [chatid])


  const typinghandler = (e) => {
    setinput(e.target.value);

    if (timerref.current) {
      clearTimeout(timerref.current);
    }//to clear previous timer function:


    if (!mytyping) {
      setmytyping(true);
      socket.emit("typing", selectedchat);
    }


    const timerlength = 3000;
    const timenow = Date.now();
    timerref.current = setTimeout(() => {
      const latertime = Date.now();
      const timediff = latertime - timenow;
      if (timediff >= timerlength && mytypingref.current) {
        // console.log("in setimeout function for stop typing:");
        socket.emit("stop typing", selectedchat);
        setmytyping(false);
      }
    }, timerlength);

  }

  const deletefriend = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER}/chat/deletechat?chatid=${chatid}`, { withCredentials: true });

      navigate('/');
      toast.success("Chat deleted successfully");
      // window.location.reload();
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }



  return (
    <>
      <div className="h-[calc(100vh-64px)]  flex flex-col w-full overflow-hidden">
        {/* Navbar (Assuming it's 64px height) */}
        <div className="bg-blue-300 py-2 px-4 md:px-8 w-full  flex justify-between items-center mb-3">
          <div className='text-2xl text-white w-full truncate font-bold'>{selectedchat?.otheruser.name}</div>

          <div className='flex gap-4  items-center justify-center'>



            <div className={`${drawerinput?"z-50":"z-40"}`}>
                <div className="drawer  drawer-end">
                  <input onChange={(e)=>setdrawerinput(e.target.checked)} id="chatprofile" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                   
                    <label htmlFor="chatprofile" className="drawer-button ">
                      <div className="chat-image avatar   cursor-pointer ">
                        <div className="w-9 rounded-full ">
                          <img
                            alt="Tailwind CSS chat bubble component"
                            src={selectedchat?.otheruser?.avatar.url}
                         
                          />
                        </div>
                      </div>

                    </label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="chatprofile" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-white text-base-content h-full w-60 sm:w-80 p-4">
                     
                      <Profileblock user={selecteduser} />
                    </div>
                    
                  </div>
                </div>
            </div>





            <span>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button onClick={() => document.getElementById('deletebtn').showModal()}><DeleteIcon color='error' /></button>
              <dialog id="deletebtn" className="modal">
                <div className="modal-box bg-white">
                  <h3 className="font-bold text-red-600 text-2xl">Delete Alert</h3>
                  <p className="py-4">Do you really want to delete this user from your friend list</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Cancel</button>
                      <button onClick={deletefriend} className="btn hover:bg-red-600 hover:scale-110 ml-4 bg-red-600 text-white">Delete</button>
                    </form>
                  </div>
                </div>
              </dialog>

            </span>

          </div>
        </div>

        {/* Chat Messages Container with max height adjusted to 100vh - 64px */}
        <div ref={chatcontainer} className="h-full overflow-y-auto">
          {messages && messages.map((msg,i) => (
            <Chatmsg key={i} avatar={msg.sender.avatar.url} sender={msg.sender._id} content={msg.content} />
          ))}

        </div>

        

        {isyoutyping && <div className='flex items-end'>Typing<span className="loading loading-dots loading-md"></span></div>}
        {/* Chat Input Form (Always at the bottom) */}
        <div className='py-2 bg-blue-300'>
          
          <form className="flex px-1" onSubmit={Handleclick} >
            <input
              className="w-full outline-none border border-gray-400 rounded-full px-2 py-1"
              type="text"
              placeholder="Enter your message"
              value={input}
              onChange={typinghandler} // Fixed input change handler
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim() !== '') {
                  Handleclick(e);
                }
              }}

            />
            <button type='submit' className="bg-blue-600 text-white p-2 rounded-full">send</button>
          </form>
        </div>
      </div>
    </>
  );

}

const ChatScreen = Layout(Chat);

export default ChatScreen
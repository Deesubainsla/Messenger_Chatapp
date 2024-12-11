import React,{useMemo} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axios from 'axios';

function AddfriendCard({avatar="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727266763~exp=1727267363~hmac=95922af5c72d8befd44ac2175b6befa8a010f0158e7d12df4690974eaa8284ee", username="trial", id="0"}) {

    // const socket = useMemo(()=> io('http://localhost:3000'),[]);
    // const socketid = useSelector((state)=>state.reduxslice.socket);
    // const socket = useMemo(()=> io('http://localhost:3000', { query: { socketid } }) ) ;

    const navigate = useNavigate();

    const handleclick = async()=>{
        
        try {
            
            const res = await axios.post(`${import.meta.env.VITE_SERVER}/chat/newchat`,{senderid: id},{
                withCredentials: true
            })

            // console.log(`${username} has became friend:`);
            navigate(`/chat/${res.data.newchat._id}`);
            window.location.reload();
            

        } catch (error) {
            console.log(error.response.data.message);
        }
        // socket.emit('notificationsend',{
        //     sender:"Deesu",
        //     reciverid:id,
        //     message:'Trying Socket.io'
        // })
    }

  return <>
        <div className='w-full px-1 rounded-md my-1 h-[50px] flex items-center border shadow-md'>
            <img className='w-11 h-11  rounded-full shrink-0 overflow-hidden' src={avatar} alt="Profile pic" />
            <div className='w-full truncate px-2 font-bold'>
                {username}
            </div>
            <button onClick={handleclick}>
                <AddCircleIcon fontSize='large' color='primary'/>
            </button>
        </div>
  </>
}

export default AddfriendCard
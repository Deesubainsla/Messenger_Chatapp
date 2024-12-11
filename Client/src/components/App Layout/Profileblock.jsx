import React,{useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import moment from 'moment'

function Profileblock({user}) {
    // const [profile, setprofile] = useState(null); 
    // const userpresent = useSelector((state)=> state.reduxslice.user);
    // const {user:userpresent} = mycontext();
    // const [user, setuser] = useState(null);
    // let user; //doesn't rerender unlike state because local variable are not reactive:
    
    

  return <>

        
        <div className='h-full overflow-auto bg-blue-200 px-2 flex gap-10 pt-[15%] items-center flex-col '>
            
            {/* <div className='min-h-[200px] w-[200px] overflow-hidden rounded-full bg-white'>
                <img className='h-full w-full object-cover' src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727266763~exp=1727267363~hmac=95922af5c72d8befd44ac2175b6befa8a010f0158e7d12df4690974eaa8284ee" alt="profile" />
            </div> */}
            <div className='h-[200px] w-[200px] overflow-hidden rounded-full bg-white'>
                <img className='h-full w-full object-cover' src={user?.avatar.url} alt="profile" />
            </div>

            
            




            <div className='flex flex-col items-center justify-center'>
                <div className='text-lg font-semibold '>{user?.bio}</div>
                <span className='text-sm'>@Bio</span>
                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-lg font-semibold '>{user?.name}</div>
                <span className='text-sm'>@Name</span>
                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-lg font-semibold '>Linked</div>
                <span className='text-sm'>@Links</span>
                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-lg font-semibold '>{moment(user?.createdAt).fromNow()}</div>
                <span className='text-sm'>@Created</span>
                
            </div>
            
            

            

        </div>
  </>
}

export default Profileblock
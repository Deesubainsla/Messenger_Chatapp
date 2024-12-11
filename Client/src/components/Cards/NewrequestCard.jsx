import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function NewrequestCard({avatar="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727266763~exp=1727267363~hmac=95922af5c72d8befd44ac2175b6befa8a010f0158e7d12df4690974eaa8284ee", username="trial", _id="0"}) {
    return <>
          <div className='w-full px-1 rounded-md my-1 h-[50px] flex items-center border shadow-md'>
              <img className='h-full rounded-full shrink-0 overflow-hidden' src={avatar} alt="Profile pic" />
              <div className='w-full truncate px-2 font-bold'>
                  {username}
              </div>
              <button className='mr-2'>
                  <CheckCircleIcon fontSize='large' color='primary'/>
              </button>
              <button>
                  <CancelIcon fontSize='large' color='error'/>
              </button>
          </div>
    </>
  }

export default NewrequestCard
import React, { useEffect, useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AddfriendCard from './Cards/AddfriendCard.jsx';
import Profileblock from './App Layout/Profileblock.jsx';
// import NewrequestCard from './Cards/NewrequestCard.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteuser } from '../utils/redux/reduxSlice.js';
import axios from 'axios';
// import { io } from 'socket.io-client';
import { Mycontext } from '../utils/contextapi/Contextapi.jsx';
import Chatlist from './App Layout/Chatlist.jsx';

function Header() {

    // const userid = useSelector((state)=>state.reduxslice.user); 
    const { user: userid, setuser, socket } = useContext(Mycontext);
    
    // const dispatch = useDispatch();
    // const socket = useMemo(()=> io('http://localhost:3000'),[]);
    // const socketid = useSelector((state)=>state.reduxslice.socket);
    // const socket = useMemo(()=> io('http://localhost:3000', { query: { socketid } }) ) ;
    
    const [allusers, setallusers] = useState([]);
    const [profileuser, setprofileuser] = useState(null);

    // const handlesocket = () => {
    //     console.log("emmiting socket notification:")
    //     socket.emit('notificationsend', {
    //         sender: 'Deesu',
    //         reciverid: '6738daf27cb744d840c38fbf',
    //         message: 'Trying socket.io'
    //     })
    // }

    // useEffect(() => {

    //     // socket.emit('setup',userid);

    //     socket.on('notificationrecived', (data) => {
    //         console.log("data from socket:", data);
    //     })
    // }, [])

    useEffect(() => {

        // socket.on('notificationrecived',({sender, message})=>{
        //     console.log('got a notification from server:');
        //     setnewnotification(prev => [`${sender}:${message}`,...prev]);
        // })

        const datafetching = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/user/getalluser`, {
                    withCredentials: true
                });
                setallusers(data.users);
                // console.log('all user fetched successfully:')
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        datafetching();

    }, [socket])

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER}/user/getprofile`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                // console.log("profile photo: ", res.data.user);
                setprofileuser(res.data.user);

            } catch (error) {
                console.log("Error in Profileblock: ", error.message);
            }
        })();
    }, [userid])

    const handlelogout = async () => {
        socket.disconnect();
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER}/user/logout`, { withCredentials: true });

            setuser(null);
            // console.log("User logged out successfully:");
        } catch (error) {
            console.log(error.response.data.message);
        }
    }


    return <>
        <div className='h-[4rem] px-4 sm:px-10 flex min-w-screen justify-between items-center bg-blue-600'>
            <h1 className='text-white font-bold text-3xl'>Messenger</h1>
            <div className='hidden sm:flex items-center gap-8 lg:gap-12'>

                

                <SearchIcon onClick={() => document.getElementById('searchmodal').showModal()} className='text-white cursor-pointer duration-500 hover:scale-125 transition hover:bg-blue-500 rounded-full' />

                <AddIcon onClick={() => document.getElementById('addgroup').showModal()} className='text-white cursor-pointer duration-500 hover:scale-125 transition hover:bg-blue-500 rounded-full' />

                <GroupIcon className='text-white cursor-pointer duration-500 hover:scale-125 transition hover:bg-blue-500 rounded-full' />

                <NotificationsIcon onClick={() => document.getElementById('notifications').showModal()} className='text-white cursor-pointer duration-500 hover:scale-125 transition hover:bg-blue-500 rounded-full' />


                <div className='relative z-50'>
                    <div className="drawer   drawer-end">
                        <input id="headerprofile" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">

                            <label htmlFor="headerprofile" className="drawer-button ">
                                <div className="chat-image avatar cursor-pointer">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={profileuser?.avatar.url}
                                        />
                                    </div>
                                </div>

                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="headerprofile" aria-label="close sidebar" className="drawer-overlay"></label>

                            <div className="menu bg-white text-base-content h-full w-80 p-2">
                                <Profileblock user={profileuser} />
                            </div>
                        </div>
                    </div>
                </div>



                <LogoutIcon className='text-white cursor-pointer duration-500 hover:scale-125 transition hover:bg-blue-500 rounded-full' onClick={handlelogout} />

            </div>

            {/* navigation for mobile  */}
            <div className='sm:hidden flex justify-center items-center gap-8'>


            <div className='relative z-50'>
                    <div className="drawer   drawer-end">
                        <input id="headerprofilemobile" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">

                            <label htmlFor="headerprofilemobile" className="drawer-button ">
                                <div className="chat-image avatar cursor-pointer">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={profileuser?.avatar.url}
                                        />
                                    </div>
                                </div>

                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="headerprofilemobile" aria-label="close sidebar" className="drawer-overlay"></label>

                            <div className="menu bg-white text-base-content h-full w-60 p-2">
                                <Profileblock user={profileuser} />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="drawer z-50 ">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button "><MenuIcon className='text-white' /></label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                        {/* <ul className="menu  bg-white text-base-content min-h-full w-60 p-4">
                            
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul> */}
                        <div className="menu  bg-white h-full text-base-content  w-60 p-2">
                            <div className='min-h-full rounded-md overflow-auto flex gap-2 flex-col  items-center w-full px-2 py-2  bg-blue-300'>
                                    
                            <button onClick={() => document.getElementById('searchmodal').showModal()} className='text-white w-full  bg-blue-400  rounded-lg py-2'>
                                Add Friend<SearchIcon  className='text-white ' />
                            </button>

                            <button onClick={() => document.getElementById('addgroup').showModal()} className='text-white w-full  bg-blue-400  rounded-lg py-2'>
                                Add Group<AddIcon  className='text-white' />
                            </button>

                            <button  className='text-white w-full  bg-blue-400  rounded-lg py-2'>
                                Group Page<GroupIcon className='text-white' />
                            </button>

                            <button onClick={() => document.getElementById('notifications').showModal()} className='text-white w-full  bg-blue-400  rounded-lg py-2'>
                                Notifications<NotificationsIcon  className='text-white' />
                            </button>

                            <button onClick={handlelogout} className='text-white w-full  bg-blue-400 mb-2 rounded-lg py-2'>
                                Logout<LogoutIcon className='text-white'  />
                            </button>

                            <Chatlist/>

                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>

            {/* Search Modal */}

            <dialog id="searchmodal" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add Friend</h3>

                    <label className="input input-bordered flex mt-4 mb-2 items-center gap-2">
                        <input type="text" className="grow" placeholder="Search User" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>

                    {allusers ? <div>

                        {/* user && user.avatar && user.avatar.url */}
                        {/* user?.avatar?.url */}

                        {/* both upper lines are same 2nd called optional chaining */}
                        {allusers.map((user) => (
                            <div key={user._id}>
                                <AddfriendCard avatar={user?.avatar?.url} username={user.username} id={user._id} />
                            </div>
                        ))}
                    </div> : <div>No user fetched</div>}


                </div>
            </dialog>

            {/* Search modal close */}

            {/* Add Group Modal */}

            <dialog id="addgroup" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">New Group</h3>

                    <label className="input input-bordered flex mt-4 mb-2 items-center gap-2">
                        <input type="text" className="grow" placeholder="Search Group Members" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>

                    <AddfriendCard />
                    <AddfriendCard />
                    <AddfriendCard />
                </div>
            </dialog>

            {/* Add Group modal close */}

            {/* notifications Modal */}

            <dialog id="notifications" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">New Request</h3>

                    <div>
                        <div className='underline font-bold'>Requests</div>
                        
                    </div>
                    <div>
                        <div className='underline font-bold'>Notifications</div>
                        
                    </div>
                </div>
            </dialog>

            {/* notifications modal close */}
        </div>
    </>
}

export default Header
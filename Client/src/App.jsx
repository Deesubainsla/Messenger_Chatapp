import React, { lazy, Suspense, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Mycontext } from './utils/contextapi/Contextapi.jsx';
// import {useSelector, useDispatch} from 'react-redux';
// import { setuser, deleteuser, setsocket } from './utils/redux/reduxSlice.js';
// import { io } from 'socket.io-client';

// import Authentication from './components/Authentication.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Chat = lazy(() => import('./pages/Chat.jsx'));
const Group = lazy(() => import('./pages/Groups.jsx'));
const Notfound = lazy(() => import('./pages/Notfound.jsx'));


function App() {


  const { user, setuser } = useContext(Mycontext);
  // const navigate = useNavigate();
  // console.log("user:", user);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const socket = useMemo(()=> io('http://localhost:3000'),[]);
  // dispatch(setsocket(socket.id));

  // useEffect(() => {
  //   console.log("checking for app.js user useeffect",user,"and",socket.connected);

  // }, [user,socket.connected])


  
  

  // useEffect(() => {

    
    

  //   // if (user && socket.connected) {//if user is not null and socket is connected:
  //   //   console.log('setup and userconnected run in useeffect in app component:');
  //   //   socket.emit('setup', user);
  //   //   socket.emit('user connected',user);
  //   // }
  // }, [user, socket])

  useEffect(() => {
    //simple promise syntax for simple commands otherwise use async await:


    axios.get(`${import.meta.env.VITE_SERVER}/user/getprofile`, {
      withCredentials: true,// Allows the client to accept and send the credentials (like cookies)
    })
      .then((res) => {
        // console.log("userid:",res.data.user._id)
        setuser(res.data.user._id);
        
      })
      .catch((error) => {
        // dispatch(deleteuser());
        console.log("getprofile error: ", error.response.data.message);
      })

    
  }, [])

  
  


  // console.log("user is ",user);
  const Authentication = ({ Component }) => {
    // console.log("in Authentication with user  ",user);
    
    return (!user) ? <Login /> : <Component />;
  }

  // const Authentication = ({ children }) => {
  //   return user ? children : <Login />; //automatically render element inside this component:
  // }

  return <div className='max-h-screen m-0 p-0 overflow-hidden'>
    <BrowserRouter>
      <Suspense fallback={<div className='flex min-h-screen justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>}>
        <Routes>
          <Route path='/' element={<Authentication Component={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat/:chatid' element={<Authentication Component={Chat} />} />
          <Route path='/groups' element={<Authentication Component={Group} />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  </div>
}

export default App
import React,{useContext, useState, createContext,useEffect, useMemo} from 'react'
import { io } from 'socket.io-client';

const Mycontext = createContext();

const MycontextProvider = ({children})=>{

    const [user, setuser] = useState(null);
    
    // const socket = useMemo(()=> io('http://localhost:3000'),[]); 
    //Socket was causing issue with useMemo
    const [socket, setsocket] = useState(null);

    useEffect(() => {

      if(user){

        const newsocket = io('http://localhost:3000'); 
        setsocket(newsocket);

        // newsocket.on('connect',(socket)=>{
        //     console.log("Socket connected with id:",newsocket);
        // })

        newsocket.emit('setup', user);
        newsocket.emit('user connected',user);

      
        return () => {
          newsocket.removeAllListeners();
          newsocket.disconnect();
          setsocket(null);
          console.log("Socket disconnected successfully:");
        }
      }
    
    }, [user])

    //mtlb jbtk dependency change nhi hoti in values ko change mt kro memorize value use kro: for useMemo
    // const contextValue = useMemo(()=>({
    //   user,
    //   setuser,
    //   notification,
    //   setnotification,
    //   socket
    // }),[user,notification, socket]);


    // const contextValue = {
    //   user,
    //   setuser,
    //   notification,
    //   setnotification,
    //   socket
    // };
      
  

    // useEffect(() => {
    //   if(user && socket){
    //     console.log("New Socket is present here:",socket);

    //     socket.emit('setup', user);
    //     socket.emit('user connected',user);
    //   }
    // }, [socket])
    
    

    return(
        <Mycontext.Provider value={{user,setuser,socket}} >
            {children}
        </Mycontext.Provider>
    )
}

// const mycontext = ()=> useContext(Mycontext);
export {Mycontext, MycontextProvider}
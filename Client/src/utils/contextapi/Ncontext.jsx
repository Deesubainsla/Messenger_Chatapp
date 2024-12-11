import React,{useState,createContext, useContext} from "react";

const Ncontext = createContext();

const NcontextProvider = ({children})=>{

    const [notification, setnotification] = useState([]);

    return(
        <Ncontext.Provider value={{notification,setnotification}}>
            {children}
        </Ncontext.Provider>
    )
}

const ncontext = ()=> useContext(Ncontext);
export {ncontext, NcontextProvider }
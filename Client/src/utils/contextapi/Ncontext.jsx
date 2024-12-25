import React,{useState,createContext, useContext} from "react";

const Ncontext = createContext();

const NcontextProvider = ({children})=>{

    const [notification, setnotification] = useState([]);
    const [fetchagain, setfetchagain] = useState(false);


    const data = {
        notification,setnotification, fetchagain, setfetchagain
    }
    
    return(
        <Ncontext.Provider value={data}>
            {children}
        </Ncontext.Provider>
    )
}

const ncontext = ()=> useContext(Ncontext);
export {ncontext, NcontextProvider }
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Authentication({user, component}) {

    const navigate = useNavigate();
   

        if(!user){
            navigate('/login');
        }

       return user? <component/> : null;

   
  
}

export default Authentication
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null,
    // socket:null
}

const reduxslice = createSlice({
    name:'reduxslice',
    initialState,//it is called the state
    reducers:{
        setuser:(state, action) =>{
            state.user = action.payload;
        },
        deleteuser:(state) =>{
            state.user = null;
        },
        // setsocket:(state, action)=>{
        //     state.socket = action.payload;
        // }
    }

})

export const {setuser, deleteuser, setsocket} = reduxslice.actions;
export default reduxslice;
import {configureStore} from '@reduxjs/toolkit'
import reduxslice from './reduxSlice'

const store = configureStore({
    reducer:{//This is state which we will get by useSelector:
        reduxslice: reduxslice.reducer
    }
})

export default store
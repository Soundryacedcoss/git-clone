import { configureStore } from "@reduxjs/toolkit";
import dataslice from './Slice/dataslice1'
const store=configureStore({
    reducer:{
       
        product:dataslice
   },
})
export default store
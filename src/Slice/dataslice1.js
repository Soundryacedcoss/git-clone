import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchdata = createAsyncThunk('products/fetch', async (input) => {
    const res = await fetch(`https://api.github.com/users/${input}`);
    const data = await res.json();
    console.log(data);
    return data;
});
export const profileData= createAsyncThunk('profile/fetch',async(input)=>{
    const res=await fetch(`https://api.github.com/users/${input}/subscriptions`);
    const data = await res.json();
    console.log(data);
    return data;
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        loading:false,
        Overview:[]
    },
   
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending, (state,action)=>{
           state.loading=true
        })
        builder.addCase(fetchdata.fulfilled, (state, action) => {
            state.data=action.payload
            state.loading=false
        })
        builder.addCase(profileData.pending, (state,action)=>{
            state.loading=true
         })
         builder.addCase(profileData.fulfilled, (state, action) => {
             state.Overview=action.payload
             state.loading=false
         })
    }
})
export default productSlice.reducer;
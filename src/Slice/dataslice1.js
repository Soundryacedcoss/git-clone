import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
// fetching information data of user
export const fetchdata = createAsyncThunk('products/fetch', async (input) => {
    const res = await fetch(`https://api.github.com/users/${input}`);
    const data = await res.json();
    return data;
});
// fetching Popular repos
export const profileData= createAsyncThunk('profile/fetch',async(input)=>{
    const res=await fetch(`https://api.github.com/users/${input}/subscriptions`);
    const data = await res.json();
    return data;
})
// Here i am fetching all repos of a indiviaual user
export const allRepoData=createAsyncThunk('repo/fetch',async(input)=>{
    const res=await fetch(`https://api.github.com/users/${input}/repos`);
    const data = await res.json();
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
         builder.addCase(allRepoData.pending, (state)=>{
            state.loading=true
         })
         builder.addCase(allRepoData.fulfilled, (state, action) => {
             state.Overview=action.payload
             state.loading=false
         })
    }
})
export default productSlice.reducer;
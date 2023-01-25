import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
   name:"user",
   initialState:{
    users:[],
    booking:[],
    payment:[]
   },
   reducers:{
     setUser:(state,action)=>{
        console.log("redux called and user info stored ...")
        state.users=action.payload

        localStorage.setItem("myToken",state.users.token)
     },
     setBooking:(state,action)=>{
        console.log("redux called and user booking info stored ...")
        state.booking=action.payload
     },
     setPayment:(state,action)=>{
     
      state.payment=action.payload
   }
   }
})

export const {setUser,setBooking,setPayment} = userSlice.actions
export default userSlice.reducer
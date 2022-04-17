
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"))



export const login = createAsyncThunk("auth/login",
  async (user,thunkAPI) => {
    let  authDetails=""
    try{

        const requestToken = await authService.login(user)
       if(requestToken.success){
        const validateToken = await authService.validate(user,requestToken.request_token)
       
       if(validateToken.success){
        const sessionId = await authService.requestSession(user,requestToken.request_token)
       
        if(sessionId.success){
            const accountId = await authService.requestAccountId(user, sessionId.session_id)
            if( accountId){
               
              
                    authDetails ={account_id: accountId.id,session_id: sessionId.session_id,request_token:requestToken.request_token,apikey:user.apikey }
                   
                    
                    localStorage.setItem("user", JSON.stringify(authDetails))

            }
    }}
    return authDetails
}

    }catch(error){
     const message = (error.response && error.response.data && 
        error.response.data.mesage) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
    
   
  }
);

export const logout = createAsyncThunk("auth/logout",
  async () => {
   
    localStorage.removeItem("user")

        
     
    
   
  }
);
const initialState ={
  user: user ? user :null,
  isError: false,
  isloading:false,
  isSuccess:false,
  message: ""

}

export const AuthSlice =createSlice({
  name:"auth",
  initialState,
 reducers:{
    reset: (state) => {
         state.isError =false
        state.isloading = false
        state.isSuccess = false
         state.message = ""
        }
    },
extraReducers:(builder) => {
    builder
    .addCase(login.pending, (state)=>{
         state.isloading =true
     
    })
    .addCase(login.fulfilled, (state, {payload})=>{
        state.isloading =false
        state.isSuccess = true
        state.user=payload
   })
   .addCase(login.rejected, (state, {payload})=>{
    state.isloading =false
    state.isError = true
    state.message =payload
    state.user =null
})
.addCase(logout.fulfilled, (state, {payload})=>{
    state.isSuccess = false
    state.user =null
})
 
 
}, 

    
 
});
export const {reset} = AuthSlice.actions;
export default AuthSlice.reducer;
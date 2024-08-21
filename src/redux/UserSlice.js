import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    referral : "",
    userName:"",
    email:"",
    token:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        checkReferral :(state, action) => {
            const ref = action.payload;
            state.referral = ref
        },
        updateUserDetails: (state, action) => {
          const {name, email, token} = action.payload;
          state.userName = name;
          state.email = email; 
          state.token = token;
        }
    }
})


export const { checkReferral, updateUserDetails } = userSlice.actions;
export default userSlice.reducer;
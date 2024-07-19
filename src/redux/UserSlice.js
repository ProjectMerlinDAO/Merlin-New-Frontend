import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    referral : ""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        checkReferral :(state, action) => {
            const ref = action.payload;
            state.referral = ref
        }
    }
})


export const { checkReferral } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    oracleList:{
        GreenStamp:[],
        YellowStamp:[],
        BlueStamp:[],
        RedStamp:[]
    }
}

const OracleList = createSlice({
    name:"oracleList",
    initialState,
    reducers:{
        addToList:(state, action) => {
            const {type,details} = action.payload;
            console.log(type,"ddddddd")
            if(!state.oracleList[type].includes(details.id)){
                state.oracleList[type].push(details)
            }
        },
        removeFromList:(state,action) => {
            const {type,details} = action.payload;
            state.oracleList[type].filter((element) => element.id != details.id)
        }
    }
})

export const {addToList, removeFromList} = OracleList.actions;

export default OracleList.reducer;
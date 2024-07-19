import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oracleList: {
    GreenStamp: [],
    YellowStamp: [],
    BlueStamp: [],
    RedStamp: [],
  },
};

const OracleList = createSlice({
  name: "oracleList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const { type, details } = action.payload;
      const tempArr = ["GreenStamp", "YellowStamp", "BlueStamp", "RedStamp"];
      tempArr.forEach((stamptype) => {
        let arr = state.oracleList[stamptype];
        if(arr.some((item) => item.id === details.id)){
            state.oracleList[stamptype] = arr.filter(
                (item) => item.id !== details.id
              );
        }
      });
      if (!state.oracleList[type].some((item) => item.id === details.id)) {
        state.oracleList[type].push(details);
      }
    },
    removeFromList: (state, action) => {
      const { deleteList } = action.payload;
      const tempArr = ["GreenStamp", "YellowStamp", "BlueStamp", "RedStamp"];
      tempArr.forEach((type) => {
      let arr = state.oracleList[type];
      state.oracleList[type] = arr.filter((item) => !deleteList.includes(item.id))
      })
    },
    removeAll:(state) => {
     state.oracleList.BlueStamp = [],
     state.oracleList.GreenStamp = [],
     state.oracleList.YellowStamp = [],
     state.oracleList.RedStamp = []
  }
},
});

export const { addToList, removeFromList, removeAll } = OracleList.actions;

export default OracleList.reducer;

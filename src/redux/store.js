import { configureStore } from "@reduxjs/toolkit";
import oracleListReducer from "./oracleListSlice";
import userReducer from "./UserSlice";

const store = configureStore({
    reducer: {
        List: oracleListReducer,
        user: userReducer
    },
  });
  
  export default store;
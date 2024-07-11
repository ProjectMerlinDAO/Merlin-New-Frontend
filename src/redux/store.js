import { configureStore } from "@reduxjs/toolkit";
import oracleListReducer from "./oracleList";

const store = configureStore({
    reducer: {
        oracleList: oracleListReducer
    },
  });
  
  export default store;
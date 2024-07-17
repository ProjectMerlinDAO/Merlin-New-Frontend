import { configureStore } from "@reduxjs/toolkit";
import oracleListReducer from "./oracleList";

const store = configureStore({
    reducer: {
        List: oracleListReducer
    },
  });
  
  export default store;
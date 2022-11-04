import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../appSlice";
import errorReducer from "../errorSlice";

export default configureStore({
  reducer: {
    students: studentReducer,
    errors: errorReducer,
  },
});

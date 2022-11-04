import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "errors",
  initialState: [],
  reducers: {
    errorMessage: (state, action) => {
      const error = {
        msg: `Sorry, ${action.payload} is not a verified student!`,
      };
      state.push(error);
    },
    expiredValidity: (state, action) => {
      const error = {
        msg: `Sorry, ${action.payload}'s validity has Expired!`,
      };
      state.push(error);
    },
    clearError(state, action) {
      let newState = [...state];
      newState.length = 0;
      return newState;
    },
  },
});

// this is for dispatch
export const { errorMessage, clearError, expiredValidity } = errorSlice.actions;

// this is for configureStore
export default errorSlice.reducer;

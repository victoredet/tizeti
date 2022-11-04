import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "sudents",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      const valid_student = {
        name: action.payload,
      };
      state.push(valid_student);
    },
  },
});

// this is for dispatch
export const { addStudent, invalidStudent } = appSlice.actions;

// this is for configureStore
export default appSlice.reducer;

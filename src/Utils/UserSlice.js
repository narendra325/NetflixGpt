import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeuser } = userslice.actions;
export default userslice.reducer;

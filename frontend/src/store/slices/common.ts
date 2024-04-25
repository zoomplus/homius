import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  language: "ru",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    SET_LANGUAGE: (state) => {
      state.language = "eng";
    },
  },
});
export const { SET_LANGUAGE } = commonSlice.actions;
export default commonSlice.reducer;

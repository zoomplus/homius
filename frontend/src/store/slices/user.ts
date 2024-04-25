import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
  data: {
    user_id: "",
    user_fullname: "",
    user_name: "",
    user_surname: "",
    user_patronymic: "",
    user_mail: "",
    user_phone: "",
    user_birthday: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    SET_DATA: (state, action) => {
      state.data = action.payload;
    },
    SET_LOGOUT: (state) => {
      state.token = initialState.token;
      state.data = initialState.data;
    },
  },
});
export const { SET_TOKEN, SET_DATA, SET_LOGOUT } = userSlice.actions;
export default userSlice.reducer;

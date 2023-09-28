import { createSlice } from '@reduxjs/toolkit';

//createSlice dùng để tạo reducers và acctions
const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  }
});

export const authActions = authSlice.actions;

export default authSlice;
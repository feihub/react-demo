import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface LoginState {
  isLogin: boolean;
  username: string;
}

const initialState: LoginState = {
  isLogin: false,
  username: null,
};

//3.创建state slice用于生成action和reducer
export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login.value;

export default loginSlice.reducer;

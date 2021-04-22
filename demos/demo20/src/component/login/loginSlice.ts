import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';

export interface LoginState {
  isLogin: boolean;
  username: string;
}

const initialState: LoginState = {
  isLogin: false,
  username: '',
};

//3.创建state slice用于生成action和reducer
export const loginSlice = createSlice({
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

export const selectLogin = (state: RootState) => state.login.isLogin;

export default loginSlice.reducer;

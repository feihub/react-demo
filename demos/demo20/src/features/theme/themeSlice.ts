import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light'
};

//3.创建state slice用于生成action和reducer
export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeLight: (state) => {
      state.theme = 'light';
    },
    changeThemeDark: (state) => {
      state.theme = 'info';
    }
  }
});

export const { changeThemeLight, changeThemeDark } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;

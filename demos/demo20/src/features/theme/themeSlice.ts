import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeLight: (state) => {
      state.theme = 'light';
    },
    changeThemeInfo: (state) => {
      state.theme = 'info';
    }
  }
});

export const { changeThemeLight, changeThemeDark } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;

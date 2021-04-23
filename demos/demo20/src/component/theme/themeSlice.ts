import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';

export interface ThemeState {
  headTheme: string;
  bodyTheme: string;
}

export const primary : string ='primary';
export const secondary : string ='secondary';
export const success : string ='success';
export const warning : string ='warning';
export const danger : string ='danger';
export const info : string ='info';
export const light : string ='light';
export const dark : string ='dark';

export const theme1: ThemeState = {
  headTheme: info,
  bodyTheme: light
}

export const theme2: ThemeState = {
  headTheme: secondary,
  bodyTheme: dark
}

export const theme: ThemeState = {
  headTheme: theme1.headTheme,
  bodyTheme: theme1.bodyTheme
}

const initialState: ThemeState = theme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToTheme1: (state) => {
      state.headTheme = theme1.headTheme;
      state.bodyTheme = theme1.bodyTheme;
    },
    changeToTheme2: (state) => {
      state.headTheme = theme2.headTheme;
      state.bodyTheme = theme2.bodyTheme;
    }
  }
});

export const { changeToTheme1,  changeToTheme2} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;

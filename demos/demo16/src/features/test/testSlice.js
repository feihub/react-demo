import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  testValue: '0',
  testValue2: 'Parent',
  testValue3: {testValue3:'Child'},
}

export const testSlice = createSlice({
  name: 'test',
  initialState,

  reducers: {
    changTestValue: (state, action) => {
      state.testValue = action.payload.target.value;
    },
    changTestValue2: (state, action) => {
      state.testValue2 = action.payload.target.value;
    },
    changTestValue3: (state, action) => {
      state.testValue3.testValue3 = action.payload.target.value;
    },
  },
  
});

export const { changTestValue, changTestValue2, changTestValue3 } = testSlice.actions;

export const selectTestValue = (state) => state.test.testValue;
export const selectTestValue2 = (state) => state.test.testValue2;
export const selectTestValue3 = (state) => state.test.testValue3;

export default testSlice.reducer;

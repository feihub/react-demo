import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  testValue: '0',
  testValue2: 'Parent',
  testValue3: { testValue3: 'Child' },
  testValue4: 'loading',
}

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});

export const asyncChangTestValue4 = createAsyncThunk(
  'test',
  async (amount) => {
    try {
      const response = await await instance.get('/get?name=instance-get');
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Error
      console.log(error.message);
      return error.message;
    }
  }
);

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
    changTestValue4: (state, action) => {
      state.testValue4 = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(asyncChangTestValue4.pending, (state) => {
        state.testValue4 = '--loading';
      })
      .addCase(asyncChangTestValue4.fulfilled, (state, action) => {
        state.testValue4 = action.payload;
      });
  },

});

export const { changTestValue, changTestValue2, changTestValue3 , changTestValue4} = testSlice.actions;

export const selectTestValue = (state) => state.test.testValue;
export const selectTestValue2 = (state) => state.test.testValue2;
export const selectTestValue3 = (state) => state.test.testValue3;
export const selectTestValue4 = (state) => state.test.testValue4;

// customer thunks
export const customerChangTestValue4 = (amount) => (dispatch, getState) => {
  const currentValue = selectTestValue4(getState());
  if (currentValue == 'Hello instance-get!') {
    dispatch(changTestValue4(currentValue+"ok"));
  }
};


export default testSlice.reducer;

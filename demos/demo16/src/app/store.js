import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//1.创建并导出Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,//6.把counterSlice生成的reducer加入配置
  },
});

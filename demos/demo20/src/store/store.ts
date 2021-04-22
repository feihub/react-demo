import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../component/counter/counterSlice';
import themeReducer from '../component/theme/themeSlice';
import loginReducer from '../component/login/loginSlice';

//1.创建并导出Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,//6.把counterSlice生成的reducer加入配置
    theme: themeReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

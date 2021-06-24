import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../COMPONENT/timerSlice'

export const store = configureStore({
   reducer:{
     timer:timerReducer
   }
  });
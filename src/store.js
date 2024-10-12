import { configureStore } from '@reduxjs/toolkit';
import laterReducer from './Laterslice.js';

export const store = configureStore({
  reducer: {
    later: laterReducer,
  },
});
// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReduceer from './avSlice';
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReduceer,
  },
});

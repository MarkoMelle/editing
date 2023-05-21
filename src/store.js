import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/servicesSlice';

export default configureStore({
  reducer: {
    services: serviceReducer,
  },
});

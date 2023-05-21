import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceListSlice';
import serviceAddReducer from './slices/serviceAddSlice';

export default configureStore({
  reducer: {
    servicesList: serviceReducer,
    serviceAdd: serviceAddReducer,
  },
});

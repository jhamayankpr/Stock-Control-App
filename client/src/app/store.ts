import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../state/global';      // <-- CHANGE THIS to your reducer path/name!
import { api } from '../state/api';                     // <-- CHANGE OR REMOVE if not using RTK Query!

// Configure the Redux store
export const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,                   // Remove this line if not using RTK Query!
    // Add other reducers (user: userReducer etc.) here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),    // Remove or edit for custom middleware
});

// TypeScript: Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed custom hooks for safely using Redux in components
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Default export (optional, allows both "import store" and "import { store }")
export default store;

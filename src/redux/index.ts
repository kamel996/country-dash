import { UnknownAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './RTK';
import {countryApi} from "./RTK/country.api";


const store = configureStore({
  reducer: {
    ...rootReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countryApi.middleware)
});

const getStore = () => store;

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IRootState, unknown, UnknownAction>;

export default getStore;

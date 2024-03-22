import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loadingReducer } from "./features/loading/loadingSlice";

const store = configureStore({
    reducer: {
        loadingReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
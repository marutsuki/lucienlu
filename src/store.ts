import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loadingReducer } from "./features/loading/loadingSlice";
import { scrollReducer } from "./features/navigation/scrollSlice";
import { computerReducer } from "./features/backend/computerSlice";

const store = configureStore({
    reducer: {
        loadingReducer,
        scrollReducer,
        computerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
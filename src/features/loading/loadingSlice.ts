import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        status: false,
    },
    reducers: {
        setLoadingStatus: (_, action: PayloadAction<boolean>) => ({ status: action.payload }),
    },
    selectors: {
        selectStatus: (state) => state.status,
    }
})

export const loadingReducer = loadingSlice.reducer

export const selectLoadingStatus = (state: RootState) => state.loadingReducer.status;

export const { setLoadingStatus } = loadingSlice.actions;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type LoadingStatus = "NotReady" | "Ready" | "Loaded";

const initialState: {
    status: LoadingStatus;
} = {
    status: "NotReady",
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoadingStatus: (_, action: PayloadAction<LoadingStatus>) => ({ status: action.payload }),
    },
    selectors: {
        selectStatus: (state) => state.status,
    }
})

export const loadingReducer = loadingSlice.reducer

export const selectLoadingStatus = (state: RootState) => state.loadingReducer.status;

export const { setLoadingStatus } = loadingSlice.actions;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ReactNode } from "react";

const initialState: { content: ReactNode | ReactNode[], url: string } = {
    content: <><h1>Welcome</h1>Type in an endpoint to read more...</>,
    url: "http://localhost:3000"
}

const computerSlice = createSlice({
    name: "computerContext",
    initialState,
    reducers: {
        updateContent: (state, action: PayloadAction<ReactNode | ReactNode[]>) => ({ ...state, content: action.payload }),
        updateUrl: (state, action: PayloadAction<string>) => ({ ...state, url: action.payload }),
    }
});

export const computerReducer = computerSlice.reducer;

export const selectComputerUrl = (state: RootState) => state.computerReducer.url;
export const selectComputerContent = (state: RootState) => state.computerReducer.content;
export const { updateContent, updateUrl } = computerSlice.actions;
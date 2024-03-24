import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ReactNode } from "react";

type ComputerContextState = { id: string, content: ReactNode | ReactNode[], url: string }
const initialState: ComputerContextState = {
    id: "Home",
    url: "http://localhost:3000",
    content: <><h1>Welcome</h1>Type in an endpoint to read more...</>,
}

const computerSlice = createSlice({
    name: "computerContext",
    initialState,
    reducers: {
        updateContent: (state, action: PayloadAction<ReactNode | ReactNode[]>) => ({ ...state, content: action.payload }),
        updateUrl: (state, action: PayloadAction<string>) => ({ ...state, url: action.payload }),
        updatePage: (_, action: PayloadAction<ComputerContextState>) => action.payload,
    }
});

export const computerReducer = computerSlice.reducer;

export const selectComputerUrl = (state: RootState) => state.computerReducer.url;
export const selectComputerContent = (state: RootState) => state.computerReducer.content;
export const selectComputerPage = (state: RootState) => state.computerReducer.id;
export const { updateContent, updateUrl, updatePage } = computerSlice.actions;
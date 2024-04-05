import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type ScrollContext =
    | "Intro"
    | "AboutMe"
    | "Frontend"
    | "Backend"
    | "Projects"

const initialState: { context: ScrollContext } = {
    context: "Intro",
}

const scrollSlice = createSlice({
    name: "scrollContext",
    initialState,
    reducers: {
        updateScrollContext: (_, action: PayloadAction<ScrollContext>) => ({
            context: action.payload,
        }),
    },
})

export const scrollReducer = scrollSlice.reducer

export const selectScrollContext = (state: RootState) => state.scrollReducer
export const { updateScrollContext } = scrollSlice.actions

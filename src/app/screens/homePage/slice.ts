import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
    popularClothes: [],
    newClothes: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPopularClothes: (state, action) => {
            state.popularClothes = action.payload; // 3 -- bu joyda olingan data ni popularClothes ga joylayabdi
        },
        setNewClothes: (state, action) => {
            state.newClothes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const { setPopularClothes, setNewClothes, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;  // 4 -- tayyor bulgan HomePageReducer ni storega yozish uchun export qilamiz

import { createSelector } from "reselect";
import { AppRootState, HomePageState } from "../../../lib/types/screen";


export const retrievePopularClothes = createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.popularClothes // 1 -- bu joyda storimizdagi HomePageStateni ichidagi popularClothesning datasini qulga olamiz
);

export const retrieveNewClothes = createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.newClothes
);

export const retrieveTopUsers = createSelector(
  (state: AppRootState) => state.homePage,
  (HomePage: HomePageState) => HomePage.topUsers
);

import type { IState } from "../../types/types";

export const selectIsLoggedIn = (state: IState) => state.admin.isLoggedIn;
export const selectAdmin = (state: IState) => state.admin.admin;
export const selectIsLoading = (state: IState) => state.admin.isLoading;
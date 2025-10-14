import type { IState } from "../../types/admin";

export const selectIsLoggedIn = (state: IState) => state.admin.isLoggedIn;
export const selectCurrentAdmin = (state: IState) => state.admin.currentAdmin;
export const selectIsLoading = (state: IState) => state.admin.isLoading;
export const selectIsMobileMenuOpen = (state: IState) => state.admin.isMobileMenuOpen;
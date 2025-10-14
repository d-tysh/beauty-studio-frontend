import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAdmin, IAdminState } from "../../types/types";

const initialState: IAdminState = {
    currentAdmin: null,
    isLoggedIn: false,
    isLoading: false,
    isMobileMenuOpen: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCurrentAdmin: (state, action: PayloadAction<IAdmin>) => {
            state.currentAdmin = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        adminLogout: (state) => {
            state.currentAdmin = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.isMobileMenuOpen = action.payload;
        },
    }
})

export const {
    setCurrentAdmin,
    setLoading,
    adminLogout,
    setMobileMenuOpen
} = adminSlice.actions;

export default adminSlice.reducer;
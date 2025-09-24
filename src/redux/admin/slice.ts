import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAdmin, IAdminState } from "../../types/types";

const initialState: IAdminState = {
    currentAdmin: null,
    isLoggedIn: false,
    isLoading: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLogin: (state, action: PayloadAction<IAdmin>) => {
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
    }
})

export const {
    adminLogin,
    setLoading,
    adminLogout
} = adminSlice.actions;

export default adminSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { IAdminState } from "../../types/types";

const initialState: IAdminState = {
    admin: null,
    isLoggedIn: false,
    isLoading: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLogin: (state, action) => {
            state.admin = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        adminLogout: (state) => {
            state.admin = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
    }
})

export const {
    adminLogin,
    setLoading,
    adminLogout
} = adminSlice.actions;

export default adminSlice.reducer;
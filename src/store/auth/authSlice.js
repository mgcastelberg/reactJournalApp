import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            // state.counter += 1;
        },
        logout: (state, payload ) => {
            // state.counter += 1;
        },
        checkingCredentials: (state) => {
            // state.status = 'checking';
        },
    },
});

// Action creator functions
export const { login, logout, checkingCredentials } = authSlice.actions;
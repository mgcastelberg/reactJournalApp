import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated', checking
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, payload) => {
            const data = payload.payload;
            state.status = 'authenticated'; // 'authenticated', 'not-authenticated', checking
            state.uid = data.uid;
            state.email = data.email;
            state.displayName = data.displayName;
            state.photoURL = data.photoURL;
            state.errorMessage = null;
        },
        logout: (state, payload ) => {
            const data = payload.payload;
            state.status = 'not-authenticated'; // 'authenticated', 'not-authenticated', checking
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = data.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

// Action creator functions
export const { login, logout, checkingCredentials } = authSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: { id: '123', title: '', body: '', date: 123123, imageUrls: [] },
        activeNote: {},
    },
    reducers: {
        addNewEmptyNote: ( state, action ) => {

        },
        setActiveNote: ( state, action ) => {

        },
        setNotes: ( state, action ) => {

        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById:(state, action) =>{

        }
    }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: { id: '123', title: '', body: '', date: 123123, imageUrls: [] },
        activeNote: {},
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
        },
        setActiveNote: ( state, action ) => {
            console.log(action.payload);
            state.active = action.payload;
            state.isSaving = false;
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
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: { id: '123', title: '', body: '', date: 123123, imageUrls: [] },
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            // console.log(action.payload);
            state.active = action.payload;
        },
        setNotes: ( state, action ) => {
            // console.log(action.payload);
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            // TODO: mensaje de error
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            // barrer listado de notas y actualizar la que corresponda
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            });
            // TODO: mostrar mensaje de actualizacion
        },
        deleteNoteById:(state, action) =>{

        }
    }
});

// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;
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
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            // console.log(action.payload);
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            // TODO: mensaje de error
            state.messageSaved = '';
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
            // Los reducers no deben disparar funciones de terceros como sweetalert
            state.messageSaved = `Nota actualizada correctamente`;
        },
        setPhotoToActiveNote: ( state, action ) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteById:(state, action) =>{

        }
    }
});

// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, setPhotoToActiveNote, deleteNoteById } = journalSlice.actions;
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotoToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

// Importante: thunk es cuando tengo que despachar acciones asincronas
export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch( savingNewNote() );
        
        // console.log(getState()); // para ver el estado
        const { uid } = getState().auth;

        // console.log(uid);
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );

        const setDocResp = await setDoc( newDoc, newNote ); // Para guardarlo
        // console.log({newDoc, setDocResp});

        newNote.id = newDoc.id;

        // Los dispatch son acciones que despachan acciones asincronas
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El usuario no está autenticado');
        // console.log({uid});
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        
        if( !uid ) throw new Error('El usuario no está autenticado');

        const noteToFirestore = { ...note };
        delete noteToFirestore.id; // Eliminar una propiedad de un objeto

        // console.log(noteToFirestore);

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` ); // Para actualizar
        await setDoc( docRef, noteToFirestore, { merge: true } ); // el merge es para actualizar y no crear un nuevo documento 

        dispatch( updateNote(note) );

    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async(dispatch) => {
        dispatch( setSaving() ); // Bloquear el botón y mostrar el spinner
        console.log(files);

        // await fileUpload( files[0] );
        // Crear un array de promesas
        const fileUploadPromises = [];
        for( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photoUrls = await Promise.all( fileUploadPromises );
        console.log(photoUrls);

        dispatch( setPhotoToActiveNote(photoUrls) );

    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        // console.log( {uid, note} );
        
        if( !uid ) throw new Error('El usuario no está autenticado');

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` ); // Para apuntar al documento
        await deleteDoc( docRef ); 

        dispatch( deleteNoteById(note.id) );

    }
}
import { SaveOutlined, Upload, UploadOutlined } from '@mui/icons-material';
import { Box, Button, Icon, IconButton, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { title, body, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [formState]);

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        // tiene que ser un Thunks
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        if ( target.files && target.files.length > 0 ) {
            if(target.files === 0) return;
            // console.log(target.files);
            dispatch( startUploadingFiles(target.files) );
        }
    }

    return (
        <Box>
        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
            <Grid>
                <Typography fontSize={30} fontWeight={'light'}>{ dateString }</Typography>
            </Grid>
            <Grid>

                <input type="file" 
                    multiple
                    ref={ fileInputRef } 
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                    accept="image/png, image/gif, image/jpeg"
                />

                <IconButton
                    sx={{ mr:2 }}
                    color='primary'
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined sx={{ fontSize:30 }} />
                </IconButton>

                <Button color='primary' variant='contained'
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                >
                    <SaveOutlined sx={{ fontSize:30, mr:1 }} />
                    Guardar
                </Button>
            </Grid>
        </Grid>
        <Grid container >

            <Grid size={12} sx={{ mt: 2 }}>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    sx={{ border: 'none', mb:1 }}
                    name="title"
                    value={ title}
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid size={12} sx={{ mt: 1 }}>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    label='Descripción'
                    placeholder='¿Qué sucedió en el día de hoy?'
                    sx={{ border: 'none', mb:1 }}
                    minRows={5}
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />


        </Grid>

        </Box>
    )
}

import { SaveOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector( state => state.journal );
    const { title, body, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ]);

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [formState]);

    const onSaveNote = () => {
        // tiene que ser un Thunks
        dispatch( startSaveNote() );
    }

    return (
        <Box>
        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
            <Grid>
                <Typography fontSize={30} fontWeight={'light'}>{ dateString }</Typography>
            </Grid>
            <Grid>
                <Button color='primary' variant='contained'
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

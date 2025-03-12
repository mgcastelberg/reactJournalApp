import { SaveOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Box>
    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
        <Grid item>
            <Typography fontSize={30} fontWeight={'light'}> 28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
           <Button color='primary' variant='contained'>
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
            />
        </Grid>

        <Grid size={12} sx={{ mt: 1 }}>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Qué sucedió en el día de hoy'
                sx={{ border: 'none', mb:1 }}
                minRows={5}
            />
        </Grid>

        {/* Image Gallery */}
        <ImageGallery />


    </Grid>

    </Box>
  )
}

import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid 
      container 
      spacing={0}
      direction={"column"}
      alignContent={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "calc(100vh - 115px)", backgroundColor: "#e8ebf1", borderRadius:5 }}
    >

      <Grid display="flex" justifyContent="center" alignItems="center">
        <StarOutline sx={{ fontSize: 70, color: '#313233'}} />
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography color="#313233" variant='h5'>Selecciona una entrada</Typography>
      </Grid>

    </Grid>
  )
}

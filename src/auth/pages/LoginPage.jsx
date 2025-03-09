import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import { Link as RouterLink } from 'react-router';

export const LoginPage = () => {
  return (

    <Grid 
      container 
      spacing={0}
      direction={"column"}
      alignContent={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid  
        className="box-shadow" 
        size={3}
        sx={{ width: { sm: 450, xs: 300 }, backgroundColor: "rgba(256,256,256,0.9)", padding: 3, borderRadius: 2 }}>

          <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

          <form>
            <Grid container>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" />
              </Grid>

              <Grid container size={12} spacing={2} sx={{ mb: 1, mt: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Button fullWidth variant="outlined" >
                    <Google /> 
                    <Typography sx={{ ml: 1, fontSize: 15 }}>Google</Typography>
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Button fullWidth variant="contained" >Login</Button>
                </Grid>
              </Grid>

              <Grid container size={12} direction="row" sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1
              }}>
                <Link component={RouterLink} to="/auth/register">Crear una cuenta</Link>
              </Grid>
              
            </Grid>
          </form>

      </Grid>
    </Grid>

  )
}

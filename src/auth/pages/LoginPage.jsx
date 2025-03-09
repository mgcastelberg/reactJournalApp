import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'

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
      <Grid item 
        className="box-shadow" 
        xs={3} 
        sx={{ width: { sm: 450 }, backgroundColor: "rgba(256,256,256,0.9)", padding: 3, borderRadius: 2 }}>

          <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

          <form>
            <Grid container>
              <Grid item size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" placeholder="Correo" />
              </Grid>
              <Grid item size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" placeholder="Contraseña" />
              </Grid>
            </Grid>
          </form>

      </Grid>
    </Grid>

  )
}

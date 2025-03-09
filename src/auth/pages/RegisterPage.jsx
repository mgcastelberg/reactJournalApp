import { Button, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">

          <form>
            <Grid container>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Nombre Completo" fullWidth type="text" />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Confirmar Contraseña" fullWidth type="password" />
              </Grid>

              <Grid container size={12} spacing={2} sx={{ mb: 1, mt: 2 }} >
                  <Button fullWidth variant="contained" >Crear cuenta</Button>
              </Grid>

              <Grid container size={12} direction="row" sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1
              }}>
                <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} to="/auth/login"> Ingresar</Link>
              </Grid>

            </Grid>
          </form>

    </AuthLayout>
  )
}

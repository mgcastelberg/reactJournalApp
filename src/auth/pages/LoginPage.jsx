import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { checkingAuthentication } from '../../store/auth/thunks';

export const LoginPage = () => {

  const dispach = useDispatch();

  const { email, password, onInputChange } = useForm({
    'email': 'jmgc@terraunida.com',
    'password': '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password });
    dispach( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispach( checkingAuthentication() );
  }

  return (

    <AuthLayout title="Login">

          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" name='email' value={ email } onChange={ onInputChange } />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" name='password' value={ password } onChange={ onInputChange } autoComplete='off' />
              </Grid>

              <Grid container size={12} spacing={2} sx={{ mb: 1, mt: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Button fullWidth variant="outlined" onClick={ onGoogleSignIn } >
                    <Google /> 
                    <Typography sx={{ ml: 1, fontSize: 15 }}>Google</Typography>
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Button type='submit' fullWidth variant="contained" >Login</Button>
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

    </AuthLayout>

  )
}

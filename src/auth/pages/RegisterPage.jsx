import { Button, TextField, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'jmgc@terraunida.com',
  password: '123456',
  displayName: 'Manux Dev'
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe ser valido'],
  password: [ (value) => value.length >= 6, 'El passwor debe tener mas de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],  
}

export const RegisterPage = () => {

  const { 
      formState, displayName, email, password, onInputChange,
      isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  console.log( displayNameValid );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ displayName, email, password });
  }

  return (
    <AuthLayout title="Crear cuenta">

          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Nombre Completo" fullWidth type="text" name="displayName" value={ displayName } onChange={ onInputChange } autoComplete='off'
                 error={ !displayNameValid ? true : false }
                 helperText={ !displayNameValid && 'El nombre es obligatorio' }
                />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" name='email' value={ email } onChange={ onInputChange } autoComplete='off' />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" name='password' value={ password } onChange={ onInputChange } />
              </Grid>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Confirmar Contraseña" fullWidth type="confirm_password" name='confirm_password' value={ password } onChange={ onInputChange } />
              </Grid>

              <Grid container size={12} spacing={2} sx={{ mb: 1, mt: 2 }} >
                  <Button type='submit' fullWidth variant="contained" >Crear cuenta</Button>
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

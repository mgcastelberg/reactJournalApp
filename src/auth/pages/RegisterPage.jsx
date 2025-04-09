import { Button, TextField, Typography, Link, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe ser valido'],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],  
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const {
      formState, displayName, email, password, onInputChange,
      isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
    // console.log( formState );
  }

  return (
    <AuthLayout title="Crear cuenta">
          
          {/* {!isFormValid && (
            <Alert variant="outlined" severity="error">
              Corrige los errores
            </Alert>
          )} */}

          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Nombre Completo" fullWidth type="text" name="displayName" value={ displayName } onChange={ onInputChange } autoComplete='off'
                 error={ !!displayNameValid && formSubmitted } // !! convierte en boolean
                 helperText={ !!displayNameValid && formSubmitted ? displayNameValid : '' }
                />
              </Grid>

              <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Correo" fullWidth type="email" name='email' value={ email } onChange={ onInputChange } autoComplete='off'
                  error={ !!emailValid && formSubmitted } // !! convierte en boolean
                  helperText={!!emailValid && formSubmitted ? emailValid : ''}
                />
              </Grid>

              <Grid  size={12} sx={{ mt: 2 }}>
                <FormControl fullWidth variant="outlined" error={!!passwordValid && formSubmitted}>
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{!!passwordValid && formSubmitted ? passwordValid : ''}</FormHelperText>
                </FormControl>
              </Grid>

              {/* <Grid  size={12} sx={{ mt: 2 }}>
                <TextField label="Contraseña" fullWidth type="password" name='password' value={ password } onChange={ onInputChange } 
                  error={ !!passwordValid && formSubmitted } // !! convierte en boolean
                  helperText={ !!passwordValid && formSubmitted ? passwordValid : '' }
                />
              </Grid> */}

              <Grid size={12} sx={{ mt: 2 }} 
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error' variant="outlined">
                  { errorMessage }
                </Alert>
              </Grid>

              <Grid container size={12} spacing={2} sx={{ mb: 1, mt: 2 }} >
                  <Button 
                    type='submit' 
                    fullWidth 
                    variant="contained" 
                    disabled={ isCheckingAuthentication }
                  >
                    Crear cuenta
                  </Button>
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

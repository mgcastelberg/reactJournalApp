import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme';

// higher order component
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

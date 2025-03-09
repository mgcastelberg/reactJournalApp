import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import React from 'react'

export const AuthLayout = ({children, title = ''}) => {
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

            <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

            { children }

        </Grid>
    </Grid>
  )
}

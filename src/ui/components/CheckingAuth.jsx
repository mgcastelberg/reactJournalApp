import React from 'react'
import Grid from '@mui/material/Grid2';
import { CircularProgress, Typography } from '@mui/material';

export const CheckingAuth = () => {
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
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
        
                <CircularProgress size={55} color="info" />
    
            </Grid>
        </Grid>
    )
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#303030"}} >
        <Toolbar >
          <Typography variant="h6" color="inherit" component="div">
            YS2 movies
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
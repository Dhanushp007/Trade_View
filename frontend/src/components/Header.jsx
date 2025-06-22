import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/logo.svg'; // Placeholder for your logo

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={Logo} alt="Logo" style={{ height: 36, marginRight: 12 }} />
          <Typography variant="h6" color="inherit" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Trade View
          </Typography>
        </Box>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/screens">Screens</Button>
        <Button color="primary" variant="outlined" component={RouterLink} to="/login" sx={{ ml: 2 }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

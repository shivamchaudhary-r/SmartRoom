import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <Box>
      <AppBar position="static" >
        <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}> SmartRoom </Typography>
        
          <Button component={NavLink} to='/student' sx={{ color: 'white', textTransform: 'none', fontWeight: "bold",  fontSize: "16px" }}> Login-Student</Button>
          <Button component={NavLink} to='/teacher' sx={{ color: 'white', textTransform: 'none', fontWeight: "bold", fontSize: "16px" }}> Login-Teacher</Button>
        
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </div>
  )
}

export default Navbar
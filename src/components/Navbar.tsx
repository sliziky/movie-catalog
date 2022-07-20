import { Box, AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {Home, Login} from "@mui/icons-material"
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{borderRadius: "50px", backgroundColor: "#7D9D9C", border: "1px solid white"}}>
      <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
        <Stack style={{width: "80%"}}>
          <Typography variant="h2" color={"#2C3639"}>
            Movie Catalog
          </Typography>
        </Stack>
        <Stack style={{width: "20%", display: "flex", alignItems: "center", justifyContent: "fl"}} direction="row">
          <Link to={""}><Home/></Link>
          <Login/>
        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
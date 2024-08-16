import React, { useState } from 'react'
import {AppBar, Button, Toolbar,Box, Typography, Tabs} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store';
import {useTypewriter} from "react-simple-typewriter"
//import { Container, Grid, Paper, Typography } from '@mui/material';
function Header() {
  const [value, setValue] = useState();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const dispatch=useDispatch();
  //const navigate=useNavigate();
  /*const {text}=useTypewriter({
    words:["Welcome to SalesMaster - Your Ultimate Sales"," Management Solution. Empowering your business with streamlined sales processes and unmatched efficiency"],
   loop:{},
  })
  */

  return (
    <>
    <AppBar
    position='sticky'
    sx={{backgroundColor:"green"}}>
      <Toolbar>
        <Typography variant='h3' color='white' sx={{fontStyle:"oblique"}}>Sales Management</Typography>
       {isLoggedIn && (<Box display="flex" marginLeft="auto" marginRight="auto">
        <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
           
          </Tabs>
        </Box>)}
        <Box display="flex" marginLeft="auto">
          
        { !isLoggedIn &&( <> <Button LinkComponent={Link} to="/"
           
           variant="contained"  sx={{margin:1,borderRadius:10,backgroundColor:"rgb(1, 47, 92)"}}>Login</Button>
          
           <Button LinkComponent={Link} to="/"
           variant="contained"  sx={{margin:1,borderRadius:10,backgroundColor:"rgb(1, 47, 92)"}}>Signup</Button>
           
           <Button LinkComponent={Link} to="/admin"
           variant="contained"  sx={{margin:1,borderRadius:10,backgroundColor:"rgb(1, 47, 92)"}}>Admin</Button>
           </>)}
           {isLoggedIn &&( <Button onClick={()=>dispatch(authAction.logOut())} LinkComponent={Link} to="/"
           variant="contained"  sx={{margin:1,borderRadius:10,backgroundColor:"rgb(1, 47, 92)"}}>LogOut</Button>)}
            
        </Box>
      </Toolbar>
      
    </AppBar>
    

     
    
   
    </>
  )
}

export default Header
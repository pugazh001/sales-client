import React, { useState } from 'react'
import { TextField,Box,Button ,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';

//import { useDispatch, useSelector } from 'react-redux';
function AdminLogin() {
 const navigate=useNavigate();
  const[input,setInput]=useState("");
 // let isLoggedIn=useSelector(state=>state.isLoggedIn);
  //console.log(isLoggedIn);
    const handleChange=(e)=>{
        setInput((preState)=>({
            ...preState,
            [e.target.name]:e.target.value
      
          }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input);

     if(input.email=="admin@gmail.com" && input.password=="admin@123"){
       //alert("admin login");
      //  isLoggedIn=true
        navigate("/homepage");
     }
     else{
        alert("Invalid Admin")
     }

    }
    
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <Box maxWidth={"400px"} display={'flex'} flexDirection={"column"} alignItems={'center'} justifyContent={'center'}
        boxShadow={"10px 10px 10px 10px #ccc" }
        padding={1}
        margin={'auto'}
        marginTop={5}
        borderRadius={5}>
             <Typography variant='h4' padding={1} textAlign={'center'} sx={{color:"rgb(1, 47, 92)",fontWeight:"bold"}}> Admin Login</Typography>
 
            <TextField name='email' onChange={handleChange} value={input.email} placeholder='Admin email' type='email' margin='normal'></TextField>
          <TextField name='password' onChange={handleChange} value={input.password} placeholder='password' type='password' margin='normal'></TextField>
          <Button sx={{marginTop:2}} variant='contained' color='info' onClick={handleSubmit}>Submit</Button>
        
        </Box>
            
        </form>
    </div>
  )
}

export default AdminLogin
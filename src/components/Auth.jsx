import React, { useState } from 'react'
import {Box, Button, TextField, Typography} from "@mui/material"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { authAction } from '../store'
import { useNavigate } from 'react-router-dom'
//import { signup } from '../../../server/controller/user-controller'


function Auth() {
  const navigate=useNavigate();
 // const[userType,setUserType]=useState("");
 // const[adminpass,setAdminpass]=useState("");
  const[input,setInput]=useState({
    name:"",
    email:"",
    password:"",
  })
   const dispatch=useDispatch();
  const [isSignup,setisSignup]=useState(false)
  const handleChange=(e)=>{
    setInput((preState)=>({
      ...preState,
      [e.target.name]:e.target.value

    }))

  }
  const sendRequest=async(type="login")=>{
    const res=await axios.post(`https://sales-server-rdyo.onrender.com/api/user/${type}`,{
     name:input.name,
     email:input.email,
     password:input.password
    }).catch(err=>console.log(err));
    const data=await res.data;

    return data
}

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("hi",input);
    if(isSignup){
      sendRequest("signup")
      .then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>dispatch(authAction.login()))
      .then(()=>navigate("/sales"))
      .then(data=>console.log("err vanthu blogs signup",data));
    }else{
      sendRequest()
      .then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>dispatch(authAction.login())).then(()=>navigate("/sales"))
      .then(data=>console.log("err vanthu blogs login",data))
    }
    
  }
  //admin
 // const [userType,setUserType]=useState("");
 /*
 if(userType=="admin" && !adminpass=="admin@123"){
    alert("Invalid Admin")
  }
*/
  return (
    
      <form onSubmit={handleSubmit} >
        <Box maxWidth={"400px"} display={'flex'} flexDirection={"column"} alignItems={'center'} justifyContent={'center'}
        boxShadow={"10px 10px 10px 10px #ccc" }
        padding={1}
        margin={'auto'}
        marginTop={5}
        borderRadius={5}
        
      >
          <Typography sx={{color:"rgb(11, 81, 243)",fontWeight:"bold"}} variant='h4' padding={1} textAlign={'center'}> { isSignup?"Sign-Up":"Login"}</Typography>
 
  
 
        
   
      
       {isSignup &&  <TextField name='name' onChange={handleChange} value={input.name} placeholder='name' type='text' margin='normal'></TextField>}{""}
          <TextField name='email' onChange={handleChange} value={input.email} placeholder='email' type='email' margin='normal'></TextField>
          <TextField name='password' onChange={handleChange} value={input.password} placeholder='password' type='password' margin='normal'></TextField>
          <Button sx={{marginTop:2}} variant='contained' color='info' onClick={handleSubmit}>Submit</Button>
          <Button sx={{marginTop:2}} color='warning' onClick={()=>setisSignup(!isSignup)}>{isSignup?"login":"signup"}</Button>
        </Box>
      </form>
    
  )
}

export default Auth
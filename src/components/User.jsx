//import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
import Typography from '@mui/material/Typography';
import { AppBar, Button,  Toolbar,Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
function User() {
    const navigate=useNavigate();
    const [users, setUsers] = useState([]);


    const sendRequest=async()=>{
        const res=await axios.get("https://sales-server-rdyo.onrender.com/api/user/")
        .catch(err=>console.log("err is get to the lead",err))
        const data=await res.data
        console.log(data);
        return data
    
      }
  useEffect(() => {
    sendRequest()
    .then(data=>setUsers(data.users))
  }, []);
  return (
    <div>

      <AppBar>
        <Toolbar>
        <Typography sx={{fontStyle:"oblique"}}>Executers</Typography>
           <Box>
            <Button>LogOut</Button>
           </Box>
          
           <button className='button' onClick={()=>navigate("/auth")}>Logout</button>
        </Toolbar>
        </AppBar>
        <h3 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px",color:"Green",fontWeight:"bold"}}>Sales Executers</h3>

        <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
            <TableCell   sx={{color:"red"}}>S.No</TableCell>
              <TableCell sx={{color:"red"}}>Name</TableCell>
              <TableCell sx={{color:"red"}}>Email</TableCell>
              <TableCell sx={{color:"red"}}>Id Number</TableCell>
              
              <TableCell sx={{color:"red"}}>No Of Create Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,index) => (
              <TableRow key={user._id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.leads.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

    </div>
  )
}

export default User
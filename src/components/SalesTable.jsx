import React from 'react'

import {
   
    TableCell,
    TableRow,
  
    IconButton,
   
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function SalesTable({key,isUser,Sno,name,email,mobile,productOfInterest,date,id}) {
  const navigete=useNavigate()

  const handleEdit=()=>{
    navigete(`update/${id}`)

  }
  const deleteRequest=async()=>{
    const res=await axios.delete(`https://sales-server-rdyo.onrender.com/api/lead/${id}`).catch(err=>console.log(err));
    const data=await res.data;
    return data
  }
  const handleDelete=()=>{
         deleteRequest().then((data)=>console.log(data)).then(()=>navigete("/")).then(()=>navigete("/sales"));
  }
   
  
  return (

      
                        <TableRow key={key}>
                            <TableCell>{Sno}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                           
                            <TableCell>{mobile}</TableCell>
                            <TableCell>{productOfInterest}</TableCell>
                            <TableCell>{date}</TableCell>
                          
                               <TableCell>
                                { isUser &&(
                                    <>
                                    <IconButton aria-label="edit">
                                         <EditIcon  onClick={handleEdit} />
                                     </IconButton>
                                     <IconButton aria-label="delete">
                                         <DeleteIcon onClick={handleDelete} />
                                     </IconButton></>
                                )

                                }
                              
                           </TableCell>
                          
                        </TableRow>
                       
                    
                
    
  )
}

export default SalesTable
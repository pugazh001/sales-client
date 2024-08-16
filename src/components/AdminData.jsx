import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar,Toolbar,Box,Typography,Button} from '@mui/material'
import AdminUserTable from './AdminUserTable';
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    
    TextField,
    
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
//import UpdateSales from './UpdateSales';
//import SalesTable from './SalesTable';
import { useState,useEffect } from 'react';
function AdminData() {
    const navigate=useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  //  const [formData, setFormData] = useState(initialFormData);
   
   const [data, setData] = useState([
        { id: 1, name: 'Test name',   mobile:"9786172510", email: 'xyz@example.com', productOfInterest: 'Product B', dateTime: '2024-05-16 10:00' },
        { id: 2, name: 'Test name', mobile:"9786172510", email: 'xyz@example.com', productOfInterest: 'Product B', dateTime: '2024-05-16 11:00' },
        // Add more data as needed
    ]);
    
    
    
   // const [lead,setLead]=useState();
    const[input,setInputs]=useState({
        name:"",
        mobile:"",
        email:"",
        productOfInterest:"",

    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleInputChange = (e) => {
     //   const { name, value } = e.target;
       // setFormData({ ...formData, [name]: value });
       setInputs((preState)=>({
        ...preState,
        [e.target.name]:e.target.value
        
  
      }))
    };
    const sendRequestAddLead=async()=>{
        const res=await axios.post("https://sales-server-rdyo.onrender.com/api/lead/add",{
          name:input.name,
          email:input.email,
          mobile:input.mobile,
          productOfInterst:input.productOfInterest,
          user:"66483ff6cd70a0138ab11252"
        }).catch(err=>console.log("post err",err))
        
        const data=await res.data;
        console.log("add",data);
        return data
      }

    const handleAddEntry = (e) => {
      //  setData([...lead, { ...formData, id: data.length + 1 }]);
        //setFormData(initialFormData);
        e.preventDefault()
    // console.log("input is",input);
       sendRequestAddLead().then(data=>console.log(data)).then(()=>navigate("/userdata"));
    };
    
  const sendRequest=async()=>{
    const res=await axios.get("https://sales-server-rdyo.onrender.com/api/lead")
    .catch(err=>console.log("err is get to the lead",err))
    const data=await res.data
    console.log(data);
    return data

  }
  useEffect(()=>{
             sendRequest()
             .then(data=>setData(data.leads))
  },[]);
  //compare id
 /* const[getid,setGetId]=useState()
  useEffect(()=>{
    const isUserIds=data.map((id)=>setGetId(id._id));
  },[getid])
  console.log("getid",getid);
  
     //console.log("id",isUserIds);
  const isUser=localStorage.getItem("userId");
  console.log("isuser",isUser);
   //console.log("lead is",data);
   console.log("id",isUser);
   //      const same=isUserIds==isUser;
   //      console.log(same);
   //update and delete function
       console.log("data is",data);

       
   //if(isUser==)
   const handleEdit=()=>{
  //  navigate(`/updates/${id}`)

  }
  
  const deleteRequest=async()=>{
    const res=await axios.delete(`http://localhost:5000/api/blog/`).catch(err=>console.log(err));
    const data=await res.data;
    return data
  }
  const handleDelete=()=>{
         deleteRequest().then((data)=>console.log(data)).then(()=>navigate("/")).then(()=>navigate("/blogs"));
  }
  */
  return (
    <div>
        <AppBar>
        <Toolbar>
        <Typography sx={{fontStyle:"oblique"}}>SalesModule</Typography>
           <Box>
            <Button>LogOut</Button>
           </Box>
          
           <button className='button' onClick={()=>navigate("/")}>Logout</button>
        </Toolbar>
        </AppBar> 

        <h2 style={{textAlign:"center",color:"green",fontWeight:"bold",marginBottom:"20px",marginTop:"20px"}}>Data Management</h2>
      
        <>
            <div style={{marginLeft:"20px"}}>
              
                <TextField
                    name="name"
                    label="Name"
                    value={input.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{marginLeft:"7px"}}
                />
                <TextField
                    name="email"
                    label="email"
                    value={input.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{marginLeft:"7px"}}
                />
                <TextField
                    name="mobile"
                    label="Mobile"
                    value={input.mobile}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{marginLeft:"7px"}}
                />
                <TextField
                    name="productOfInterest"
                    label="Product OF Interst"
                    value={input.productOfInterest}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{marginLeft:"7px"}}
                />

                <Button sx={{marginLeft:"7px"}} variant="contained" color="primary"  onClick={handleAddEntry}>
                    <AddIcon />
                    Add
                </Button>
            </div>
            <br /><br /><br /><br />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:"red"}}>S.No</TableCell>
                        <TableCell sx={{color:"red"}}>Name</TableCell>
                        <TableCell sx={{color:"red"}}>Email</TableCell>
                        <TableCell sx={{color:"red"}}>Mobile</TableCell>
                        <TableCell sx={{color:"red"}}>Product of Interest</TableCell>
                        <TableCell sx={{color:"red"}}>Date & Time</TableCell>
                        <TableCell sx={{color:"red"}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <>
                        <AdminUserTable
                        key={row.id}
                        id={row._id}
                        isUser={localStorage.getItem("userId")===row.user}
                        Sno={index+1}
                        name={row.name}
                        email={row.email}
                        mobile={row.mobile}
                        productOfInterest={row.productOfInterst}
                        date={row.updatedAt}
                        />
                     
                        </>
                    ))}
                </TableBody>
                <TablePagination
                    rowsPerPageOptions={[2, 3,5,10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Table>
        </>    
                       
                       

    </div>
  )
}

export default AdminData
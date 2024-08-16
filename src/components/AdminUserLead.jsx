import React, { useEffect, useState } from 'react';
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
   
    TextField,
    Button,
} from '@mui/material';
//import EditIcon from '@mui/icons-material/Edit';
//import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
//import UpdateSales from './UpdateSales';
import SalesTable from './SalesTable';
//const initialFormData = { name: '', mobile: '', product: '', email: '' };

function SalesLead() {
    const navigate=useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  //  const [formData, setFormData] = useState(initialFormData);
   
   const [data, setData] = useState([
        { id: 1, name: 'John Doe',   mobile:"9786172510", email: 'john@example.com', productOfInterest: 'Product B', dateTime: '2024-05-16 10:00' },
        { id: 2, name: 'Jane Smith', mobile:"9786172510", email: 'jane@example.com', productOfInterest: 'Product B', dateTime: '2024-05-16 11:00' },
        // Add more data as needed
    ]);
    
    
    
    const [lead,setLead]=useState();
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
          user:localStorage.getItem("userId")
        }).catch(err=>console.log("post err",err))
        
        const data=await res.data;
        console.log("add",data);
        return data
      }

    const handleAddEntry = (e) => {
      //  setData([...lead, { ...formData, id: data.length + 1 }]);
        //setFormData(initialFormData);
        e.preventDefault()
     console.log("input is",input);
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
  /*
  //compare id
  const[getid,setGetId]=useState()
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
    navigate(`/update`)

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
        <>
            <div>
                <br />
                <TextField
                    name="name"
                    label="Name"
                    value={input.name}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <TextField
                    name="email"
                    label="email"
                    value={input.email}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <TextField
                    name="mobile"
                    label="Mobile"
                    value={input.mobile}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <TextField
                    name="productOfInterest"
                    label="Product OF Interst"
                    value={input.productOfInterest}
                    onChange={handleInputChange}
                    variant="outlined"
                />

                <Button variant="contained" color="primary"  onClick={handleAddEntry}>
                    <AddIcon />
                    Add
                </Button>
            </div>
            <br /><br /><br /><br />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Product of Interest</TableCell>
                        <TableCell>Date & Time</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <>
                        <SalesTable
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
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Table>
        </>
    );
}

export default SalesLead;

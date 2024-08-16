import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AppBar, Button, CardActionArea, Toolbar,Box } from '@mui/material';
import "./home.css"
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
    const navigate=useNavigate()
  
  return (
    <div>
        <AppBar>
        <Toolbar>
        <Typography sx={{fontStyle:"oblique"}}>AdminDashBoard</Typography>
           <Box>
            <Button>LogOut</Button>
           </Box>
          
           <button className='button' onClick={()=>navigate("/")}>Logout</button>
        </Toolbar>
        </AppBar>
        <center style={{marginTop:"20px", marginBottom:"20px"}}><h1 style={{color:"Green"}}>Welcome Back Admin...!</h1></center>
     <Card sx={{display:"flex"}}>
        <Card sx={{display:"flex", width:"40%",margin:"auto" ,mt:2,padding:2}}  >
      <CardActionArea onClick={()=>navigate("/users")}  >
        <CardMedia
          component="img"
          height="280"
         // image="https://icon-library.com/images/user-icon-png/user-icon-png-17.jpg"
          alt="green iguana"
          src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Users 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Admin view  Sales Executiver and View Sales Executive name,Email and Lead.
          </Typography>
        </CardContent>
        
        
      </CardActionArea>
      </Card>
      <Card sx={{display:"flex", width:"40%",margin:"auto" ,mt:2,padding:2}}>
      <CardActionArea onClick={()=>navigate("/userdata")}>
        <CardMedia
          component="img"
          height="250"
        //  image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          src='https://tse4.mm.bing.net/th?id=OIP.H5wIPm7sCrvPLTOkP8Kh-AHaE7&pid=Api&P=0&h=220'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            User Data
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Here...Sales Manager(Admin): Has full Access to view ,edit and Delete any lead Record
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Card>

    </div>
  )
}

export default AdminHomePage
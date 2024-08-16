import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React, { useEffect } from "react";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store";
import SalesLead from "./components/SalesLead";
import UpdateSales from "./components/UpdateSales";
import AdminLogin from "./components/AdminLogin";
import AdminHomePage from "./components/AdminHomePage";
import User from "./components/User";
import AdminData from "./components/AdminData";
import AdminUpdate from "./components/AdminUpdate";
function App() {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>{
      if(localStorage.getItem("userId")){
        dispatch(authAction.login())
      }
  },[dispatch])
  return (<React.Fragment>

    <header>
      <Header />
       
    </header>
    <main>
      <Routes>
        {!isLoggedIn ? <>
        <Route path="/" element={<Auth />}>
          </Route>
          <Route path="/admin" element={<AdminLogin />}>
            </Route>
            <Route path="/homepage" element={<AdminHomePage />}>
            </Route> 
            <Route path="/users" element={<User />}>
            </Route>
            <Route path="/userdata" element={<AdminData />}>
            </Route>
            <Route path="userdata/updates/:id" element={<AdminUpdate />}>
            </Route>
            
              </>:<>
        <Route path="/sales" element={<SalesLead />}></Route>
        <Route path="sales/update/:id" element={<UpdateSales />}></Route>
       
        </>}
        
       
        
      </Routes>
    </main>
  </React.Fragment>
    
  );
}

export default App;

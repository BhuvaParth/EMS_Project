import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";

function App() {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)  

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  
  const hendleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("user");
    } else {
      alert("Invalid email or password");
    }
  };

  

  return (
    <>
      {!user ? (
        <Login hendleLogin={hendleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;

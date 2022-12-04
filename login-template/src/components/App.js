import React from "react"
import Signup from "./Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
          </Routes>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

// TODO: make private routes work to lock down routes that should not be accessed by unauthenticated users


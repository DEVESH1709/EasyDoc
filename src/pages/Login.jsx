
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { FiKey } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import "./Login.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  
  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError(""); 

    try {
      const response = await axios.post("", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token); 
        navigate("/reports"); 
      }
    } catch (error) {
      setError("Invalid username or password"); 
    }
  };

  return (

    <div className="login-container">
      <div className="logo1">EasyDoc</div>
      <h2>Login</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
       

        <div className="input-group">
  <div className="input-wrapper">
    <HiOutlineDevicePhoneMobile  className="input-icon" fontSize={20} color="grey" />
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </div>
</div>

       
        <div className="input-group">
  <div className="input-wrapper">
    <FiKey   className="input-icon" fontSize={20} color="grey" />
    <input
      type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
    />
  </div>
</div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="forgot-password">Forgot Password?</p>
    </div>
  );
};

export default Login;

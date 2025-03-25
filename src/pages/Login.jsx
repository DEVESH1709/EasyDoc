
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { FiKey } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import "./Login.css"; 

const Login = () => {
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

 
const handleLogin = (e) => {
  e.preventDefault();
  setError("");

  // First GET request
  
  axios
    .get(
      "https://3fa4-2409-40d4-1072-25a9-4b60-4b91-70c2-8e4e.ngrok-free.app/api/method/easydoc.easydoc.api.easydoc_login.login",
      { headers: {"ngrok-skip-browser-warning": "true" },
        params: {
          usr, 
          pwd
        },
      }
  
    )
   
    .then((response) => {
      console.log("Login Response:", response);

      if (response.status === 200 && response.data.message.success_key==1) {
        alert("Login successful!");
        sessionStorage.setItem("user_token", "token "+response.data.message.api_key +":" + response.data.message.api_secret);
        navigate("/reports");
      }
      else{
        setError("Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Login Error:", error);
      setError("Invalid username or password");
    });
};

  return (

    <div className="login-container">
      <div className="logo1">EasyDoc</div>
      <div className="title-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
      </div>

      <form onSubmit={handleLogin}>
       

        <div className="input-group">
  <div className="input-wrapper">
    <HiOutlineDevicePhoneMobile  className="input-icon" fontSize={20} color="grey" />
    <input
      type="text"
      placeholder="Username"
      value={usr}
      onChange={(e) => setUsr(e.target.value)}
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
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
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

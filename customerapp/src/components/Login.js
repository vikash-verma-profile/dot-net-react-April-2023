import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Authservice from "../services/auth.service";

const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const onChangeUsername=(e)=>{
    const username=e.target.value;
    setUsername(username);
  }
  const onChangePassword=(e)=>{
    const password=e.target.value;
    setPassword(password);
  }
  const handleLogin=(e)=>{
    e.preventDefault();
    Authservice.login(username,password).then(()=>{
      
      navigate("/customer");
      window.location.reload();
    },
    (error)=>{
      console.log(error);
    });
    
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label  className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChangeUsername}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          onChange={onChangePassword}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;

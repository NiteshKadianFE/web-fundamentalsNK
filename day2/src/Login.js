import { Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = () =>{
        console.log(username);
        console.log(password);

        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        var myHeaders = new Headers();
        myHeaders.append(+
            'Content-Type', 'multipart/form-data'
        )

        axios.post(
            '/login',
            formData,
            myHeaders
        ).then(resp => navigate("/final"));
        
    }
    
  return (
    <div className='loginButton' >
        <h1>Username</h1>
        <input label="Username" type="text" name = "Username" id = "username" value = {username} onChange = {(e)=> setUsername(e.target.value)}></input>
        <br />
        <h1>Password</h1>
        <input type="text" name = "Password" id = "password" value = {password} onChange = {(e)=> setPassword(e.target.value)}></input>
        <br />  
        <Button type = "primary" onClick={handleSubmit}>Submit</Button>    
    </div>
  )
}

export default Login
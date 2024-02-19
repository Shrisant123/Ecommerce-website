import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

const UserLogin=()=>{
    const [error, seterror]=useState({
        status:'false',
        msg:"",
        type:""
    })
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
            password:data.get('password')
        }

        if(actualData.email && actualData.password){
            seterror({status:true, msg:"Login success", type:'success'});
            navigate('/body');
            document.getElementById('loginForm').reset();
        }else{
            seterror({status:true, msg:"All fields are required", type:'error'});
        }
        try{

        axios.post('http://localhost:5000/Login',{
            email:actualData.email, password:actualData.password
        })
        }catch(error){
            console.log("error occured");
        }
    }
    return(
        <>
            <Box component='form' id="loginForm" sx={{mt:'1rem'}} onSubmit={handleSubmit}>
                <TextField required fullWidth id="email" name="email" label="Email Address" />
                <TextField required fullWidth id="password" name="password" label="Password" type="password" sx={{mt:'1rem'}}/>
                <Box textAlign='center'>
                <Button variant="contained" sx={{mt:'1rem', mb:'1rem', px:'2rem'}} type="submit">
                    Login
                </Button>
            </Box>
            </Box>
            <NavLink to=" " className="panel">Forget Password ?</NavLink>
            <Alert severity={error.type}>{error.msg}</Alert>
        </>
    )
}

export default UserLogin;
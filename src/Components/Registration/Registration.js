import { Alert, Box, TextField, Button } from "@mui/material"
import {useState} from "react";
import axios from 'axios'
// import {styled} from 'styled-components'

const Registration=()=>{
    const [error, handlerror]=useState({
        type:"",
        msg:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('password'),
            confirmpassword:data.get('confirm_password')
        }
        if(actualData.name && actualData.email && actualData.password && actualData.confirmpassword){
            if(actualData.password === actualData.confirmpassword){
                handlerror({type:'success', msg:"Registration successfull"});
                document.getElementById('forms').reset();
            }else{
                handlerror({type:'error', msg:"Password doesnot match"});
            }
        }

        try{
        axios.post('http://localhost:5000/Registrations',{
            name:actualData.name, email:actualData.email, password:actualData.password, confirmpassword:actualData.confirmpassword
        });
        }catch(error){
            console.log("error occured");
        }


    }
    return(
        <>
            <Box component="form" sx={{}} id="forms" onSubmit={handleSubmit}>
                <TextField required fullWidth label="name" name="name" id="name" sx={{margin:'0.5rem'}}/>
                <TextField required fullWidth label="Email Address" name="email" id="email" sx={{margin:'0.5rem'}}/>
                <TextField required fullWidth label="Password" name="password" id="password" type="password" sx={{margin:'0.5rem'}}/>
                <TextField required fullWidth label="confirm password" name="confirm_password" type="password" sx={{margin:'0.5rem'}}/>
                <Box>
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                </Box>
                <Alert severity={error.type}>{error.msg}</Alert>
            </Box>
        </>
    )
}

export default Registration;
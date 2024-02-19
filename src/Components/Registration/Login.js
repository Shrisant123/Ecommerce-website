import {Grid, Tabs, Tab, Box} from '@mui/material'
import { useState } from 'react';
import UserLogin from './UserLogin';
import Registration from './Registration';
const TabPanel=(props)=>{
    const {children, value, index}=props;
    return(
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const Login=()=>{
    const [value, setValue]=useState(0);
    const changepanel=(event, newvalue)=>{
        setValue(newvalue)

    }
    return(
    <>
        <Grid container sx={{height:'100%'}}>
            <Grid item lg={3} sm={5} sx={{
            }}>

            </Grid>
            <Grid item lg={9}>
                <Box>
                <Tabs textColor='darkred' value={value} onChange={changepanel} className="panel">
                    <Tab label="Login"></Tab>
                    <Tab label="Registration"></Tab>
                </Tabs>
                <TabPanel value={value} index={0}><UserLogin /></TabPanel>
                <TabPanel value={value} index={1}><Registration /></TabPanel>
                </Box>
            </Grid>
        </Grid>
        
    </>
    )
}

export default Login;
import { useState } from "react";
// import {useHistory} from "react-router-dom";

const Contact=()=>{
    const [username, setusername]=useState({
        firstName:" ", lastName:" ", Address:" ", email:" ", Phone:" "
    });
    // const history=useHistory();
    let name,value;
    const changeValue=(e)=>{
        name=e.target.name;
        value=e.target.value
        setusername({...username, [name]:value});
    }

    const formSubmit=async (e)=>{
        e.preventDefault();
        const {firstName, lastName, Address, email, Phone}=username;
        const res=await fetch("/registration",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName, lastName, Address, email, Phone
            })
        })

        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid data");
        }else{
            window.alert("Data Submission successfull");
            // history.push('/body');
        }
    }

    return(
        <>
            <div>
            <form>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" id="firstName" name="firstName" value={username.firstName} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="">lastName</label>
                    <input type="Text" name="lastName" value={username.lastName} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" name="Address" value={username.Address} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={username.email} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="">Phoneno</label>
                    <input type="Phone" name="Phone" value={username.Phone} onChange={changeValue}/>
                </div>
                <div>
                    <input type="submit" onClick={formSubmit} />
                </div>
                </form>
            </div>
        </>
    )
}

export default Contact;
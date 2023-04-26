import { Padding } from "@mui/icons-material";
import { Typography ,Box,TextField, Button,Card} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from './bg.jpg';
import ploan from './personal-loan2.jpg'


function Products(){
    const navigate=useNavigate('')
    const [phNo,setPhNo]=useState('')

    const location=useLocation();
    const product=location.state;
    console.log(product)
      const data={
        id: phNo,
        phNo: phNo
      }
      const params={
        id: localStorage.getItem('phNo')
      }
    const url=new URL('http://localhost:8002/v1/create')
    url.search = new URLSearchParams(params).toString();

    
    const url1=new URL('http://localhost:8003/v1/create')
    url1.search = new URLSearchParams(params).toString();

    
    
    const handleClick=()=>{
        console.log(phNo);
        if(phNo=== ''){
            window.alert("Please provide phone number to proceed")
        }
        else if(phNo.length!=10){
            window.alert("Phone Number must of be 10 digits")
        }
        else if(product =='Auto Loan'){
            localStorage.setItem('phNo',phNo)
            fetch(url1, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(response => response.json())
            .then(json=>console.log(json))
            navigate("/vehicle-loan-step-one")
        }
        else if(product == 'Personal Loan'){
            localStorage.setItem('phNo',phNo)
            fetch(url, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(response => response.json())
            .then(json=>console.log(json))
            navigate("/personal-loan")
        }

    }
    return(
        <>
        <div style={{display: 'flex'}}>
        <img src={ploan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
        <Box sx={{ mt: 10 }}>
        <Card sx={{ml: '80px',borderRadius:'10px', width: '600px', height: '530px'}}>
            <Typography variant="h5" sx={{mt:7, color:'#3498DB'}}><center>Enter your mobile number <br/>To proceed with personal loan</center></Typography>
            <TextField id="outlined-basic" label="Enter PhoneNumber" variant="outlined" sx={{mt:10,ml:13, mb:1,width:'400px',height:'100px' }} onChange={(e)=>setPhNo(e.target.value)}/>
            <center><Button color="primary" variant="contained"sx={{width:'400px',height:'50px'}} onClick={handleClick} id="proceed-button">proceed</Button></center>
        </Card>
        </Box>
        </div>
        </>
    )
}
export default Products;
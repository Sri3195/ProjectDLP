import { Padding } from "@mui/icons-material";
import { Typography ,Box,TextField, Button,Card} from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import vloan from './vehicle-loan.jpg'
import ProgressBar from "./ProgressBar";

function VehicleloanFinal(){
    const navigate=useNavigate('')
    const handleClick=()=>{
        navigate("/")
    }
    return(
        <>
        <div style={{display: 'flex'}}>
        <img src={vloan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
        <Box sx={{ mt: 10 }}>
        <Card sx={{ml: '100px',borderRadius:'10px', width: '600px', height: '530px'}}>
            <center><Typography variant="h4" sx={{mt:10, color:'#3498DB'}}>Thank You !</Typography></center>
            <center><Typography variant="h6" sx={{mt:7, color:'#3498DB'}}>Appplication for Auto Loan Submitted. Please Wait for Validation !</Typography></center>
            <center><Button color="primary" variant="contained"sx={{mt: 10,width:'400px',height:'50px'}}  onClick={handleClick} id="proceed-button">Back to Home Page</Button></center>
        </Card>
        </Box>
        </div>
        </>
    )
}
export default VehicleloanFinal;
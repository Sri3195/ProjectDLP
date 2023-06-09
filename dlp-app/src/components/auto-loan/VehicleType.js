import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import vloan from "../../utils/vehicle-loan.jpg"
import ProgressBar from "../../ProgressBar";


function VehicleType() {
    const navigate=useNavigate()

    const [vehicleType,setVehicleType]=useState('')
    
    const handleChange=(e)=>{
        setVehicleType(e.target.value)
    }
      const params={
        id: localStorage.getItem('phNo')
      }
    const url1=new URL('http://localhost:8003/v1/update')
    url1.search = new URLSearchParams(params).toString();
    const data={
        id: localStorage.getItem('phNo'),
        phNo: localStorage.getItem('phNo'),
        vehicleType: vehicleType
      }

    const handleClick=()=>{
        if(vehicleType===''){
            window.alert("Please select Vehicle type ! ")
        }
        else{
            localStorage.setItem('vehicleType',vehicleType)
            fetch(url1, {
                method: "PUT",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(response => response.json())
            .then(json=>console.log(json))
            navigate("/vehicle-loan-residing-city")
        }
        
    }
    return (
        <>
             <div style={{display:'flex'}}>
        <img src={vloan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
            <Box sx={{ mt: 10 }}>
            <ProgressBar progress={0}/>
            <Card sx={{  ml: '80px',width: '600px', height: '500px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}

                    <FormControl>
                        <FormLabel  sx={{fontSize:'23px',mb:2,mt:5, color:'#5DADE2',ml:2,mr:10}}><center>What type of vehicle are you looking for?</center></FormLabel>
                         <Grid sx={{mt:5}}>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-emp"><FormControlLabel value="New" control={<Radio />} label="New" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-emp"> <FormControlLabel value="Used One" control={<Radio />} label="Used One" onChange={handleChange}/></Card>
                                </Grid>
                            
                            </RadioGroup>
                            <Button color="primary" variant="contained" sx={{ ml: 9, mt: 7, width: '410px', height: '50px' }} onClick={handleClick}>proceed</Button>
                        </Grid>
                    </FormControl>
                    
                </Card>
                
                    
                
            </Box>
            </div>
        </>
    )
}
export default VehicleType;
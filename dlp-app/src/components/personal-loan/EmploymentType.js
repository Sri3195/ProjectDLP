import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import ploan from "../../utils/personal-loan.jpg"
import ProgressBar from "../../ProgressBar";


function EmploymentType() {
    const navigate=useNavigate()

    const [employeetype,setEmployeeType]=useState('')
    
    const handleChange=(e)=>{
        setEmployeeType(e.target.value)
        
    }
    const url=new URL('http://localhost:8002/v1/update')
    const params={
        id: localStorage.getItem('phNo')
      }
      url.search = new URLSearchParams(params).toString();
   
    const data={
        id: localStorage.getItem('phNo'),
        phNo:localStorage.getItem('phNo'),
        empType: employeetype
    }
    const handleClick=()=>{
        if(employeetype===''){
            window.alert("Please select employment type !")
        }
        else{
            localStorage.setItem('empType',employeetype)
            fetch(url, {
                method: "PUT",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(response => response.json())
            .then(json=>console.log(json))
            navigate("/personal-loan-income")
        }
        
    }
    return (
        <>
             <div style={{display:'flex'}}>
        <img src={ploan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
            <Box sx={{ mt: 5}}>
            <ProgressBar progress={0}/>
            <Card sx={{  ml: '80px',width: '600px', height: '550px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}

                    <FormControl>
                        <FormLabel  sx={{fontSize:'23px',mb:2,mt:5, color:'#5DADE2',ml:2,mr:10}}><center>Start your loan application by selecting Employment type</center></FormLabel>
                         <Grid sx={{mt:5}}>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-emp"><FormControlLabel value="Salaried" control={<Radio />} label="Salaried" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-emp"> <FormControlLabel value="Self-Employeed Business" control={<Radio />} label="Self-Employeed Business" onChange={handleChange}/></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-emp"><FormControlLabel value="Self-Employeed Professional" control={<Radio />} label="Self-Employeed Professional" onChange={handleChange}/></Card>
                                </Grid>
                            </RadioGroup>
                            <Button color="primary" variant="contained" sx={{ ml: 9, mt: 5, width: '410px', height: '50px' }} onClick={handleClick}>proceed</Button>
                        </Grid>
                    </FormControl>
                    
                </Card>
                
                    
                
            </Box>
            </div>
        </>
    )
}
export default EmploymentType;
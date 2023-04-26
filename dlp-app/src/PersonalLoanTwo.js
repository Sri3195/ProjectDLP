import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel,IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import ploan from './personal-loan2.jpg';
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "./ProgressBar";
function PersonalLoanTwo() {
    const navigate = useNavigate()

    const [bankAccount, setBankaccount] = useState('')

    const handleChange = (e) => {
        setBankaccount(e.target.value)
        
    }

    const url=new URL('http://localhost:8002/v1/update')
    const params={
        id: localStorage.getItem('phNo')
      }
      url.search = new URLSearchParams(params).toString();
    const data={
        id: localStorage.getItem('phNo'),
        phNo: localStorage.getItem('phNo'),
        empType: localStorage.getItem('empType'),
        income: localStorage.getItem('income'),
        bankAccount: bankAccount
    }
    const handleClick = () => {
        if (bankAccount === '') {
            window.alert("Please select your primary bank account !")
        }
        else {
            localStorage.setItem('bankAccount',bankAccount)
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
            navigate("/personal-loan-step-three")
        }

    }
    const handleIconClick=()=>{
        navigate("/personal-loan-step-one")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={ploan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 3 }}>
                <ProgressBar progress={25}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                        <FormControl>
                            <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}}><center>Select your primary bank account</center></FormLabel>
                            <Grid>
                                <RadioGroup
                                    row
                                >

                                    <Grid item>
                                        <Card className="radios-income"><FormControlLabel value="axis-bank" control={<Radio />} label="Axis Bank" onChange={handleChange} /></Card>
                                    </Grid>
                                    <Grid item>
                                        <Card className="radios-income"> <FormControlLabel value="sbi-bank" control={<Radio />} label="SBI Bank" onChange={handleChange} /></Card>
                                    </Grid>
                                    <Grid item>
                                        <Card className="radios-income"><FormControlLabel value="hdfc-bank" control={<Radio />} label="HDFC Bank" onChange={handleChange} /></Card>
                                    </Grid>
                                    <Grid item>
                                        <Card className="radios-income"> <FormControlLabel value="icici-bank" control={<Radio />} label="ICICI Bank" onChange={handleChange} /></Card>
                                    </Grid>
                                    <Grid item>
                                        <Card className="radios-income"><FormControlLabel value="others" control={<Radio />} label="Others" onChange={handleChange} /></Card>
                                    </Grid>

                                </RadioGroup>
                                <Grid item>
                                    <Button color="primary" variant="contained" sx={{ ml: 9, mt: 5, width: '410px', height: '50px' }} onClick={handleClick}>proceed</Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                        
                    </Card>
                    
                </Box>
            </div>
        </>
    )
}
export default PersonalLoanTwo;
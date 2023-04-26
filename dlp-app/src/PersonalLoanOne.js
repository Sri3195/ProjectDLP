import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, IconButton,Icon} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import ploan from './personal-loan2.jpg';
import { ArrowBack } from "@mui/icons-material";
import ProgressBar from "./ProgressBar";
function PersonalLoanOne() {
    const navigate = useNavigate()

    const [income, setIncome] = useState('')

    const handleChange = (e) => {
        setIncome(e.target.value)
        localStorage.setItem('income',income)
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
        income:income
    }

    const handleClick = () => {
        if (income === '') {
            window.alert("Please select your yearly income !")
        }
        else {
            //localStorage.setItem('income',income)
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
            navigate("/personal-loan-step-two")
        }

    }
    const handleIconClick=()=>{
        navigate("/personal-loan")
    }
    return (
        <>
        <div style={{display:'flex'}}>
        <img src={ploan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
            <Box sx={{ mt: 3 }}>
            <ProgressBar progress={12.5}/>
            
                <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                     {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}}><center>Select yearly income</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Upto 3 lakhs" control={<Radio />} label="Upto 3 lakhs" onChange={handleChange}  /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="3-4 lakhs" control={<Radio />} label="3-4 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="4-5 lakhs" control={<Radio />} label="4-5 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="5-10 lakhs" control={<Radio />} label="5-10 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="10+ lakhs" control={<Radio />} label="10+ lakhs" onChange={handleChange} /></Card>
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
export default PersonalLoanOne;
import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import vloan from "../../utils/vehicle-loan.jpg"
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "../../ProgressBar";
function LoanPeriod() {
    const navigate = useNavigate()

    const [loanPeriod, setLoanperiod] = useState('')

    const handleChange = (e) => {
        setLoanperiod(e.target.value)
    }
    const params={
        id: localStorage.getItem('phNo')
      }
    const url1=new URL('http://localhost:8003/v1/update')
    url1.search = new URLSearchParams(params).toString();
    const data={
        id: localStorage.getItem('phNo'),
        phNo: localStorage.getItem('phNo'),
        vehicleType: localStorage.getItem('vehicleType'),
        residingCity: localStorage.getItem('residingCity'),
        brandType: localStorage.getItem('brandType'),
        timePeriod: localStorage.getItem('timePeriod'),
        loanAmount: localStorage.getItem('loanAmount'),
        loanPeriod:loanPeriod
        
      }

    const handleClick = () => {
        if (loanPeriod ==='') {
            window.alert("Please select you the loan amount !")
        }
        else {
            localStorage.setItem('loanPeriod',loanPeriod)
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
            navigate("/vehicle-loan-emp-type")
        }

    }
    const handleIconClick=()=>{
        navigate("/vehicle-loan-loan-loan-amount")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={vloan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 5}}>
                <ProgressBar progress={75}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>How long do you borrow it?</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="1 year" control={<Radio />} label="1 year" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="2 years" control={<Radio />} label="2 years" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="3 years" control={<Radio />} label="3 years" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="4 years" control={<Radio />} label="4 years" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="5 years" control={<Radio />} label="5 years" onChange={handleChange} /></Card>
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
export default LoanPeriod;
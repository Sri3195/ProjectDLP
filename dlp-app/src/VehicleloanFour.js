import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import vloan from './vehicle-loan.jpg';
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "./ProgressBar";
function VehicleloanFour() {
    const navigate = useNavigate()

    const [timePeriod, setTimeperiod] = useState('')

    const handleChange = (e) => {
        setTimeperiod(e.target.value)
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
        timePeriod: timePeriod
      }

    const handleClick = () => {
        if (timePeriod === '') {
            window.alert("Please select you the time period !")
        }
        else {
            localStorage.setItem('timePeriod',timePeriod)
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
            navigate("/vehicle-loan-step-five")
        }

    }
    const handleIconClick=()=>{
        navigate("/vehicle-loan-step-three")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={vloan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 5}}>
                <ProgressBar progress={45}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>When are you looking to buy?</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Already Booked" control={<Radio />} label="Already Booked" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="1 week" control={<Radio />} label="1 week" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="2 weeks" control={<Radio />} label="2 weeks" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="1 month" control={<Radio />} label="1 month" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="just searching" control={<Radio />} label="Just searching" onChange={handleChange} /></Card>
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
export default VehicleloanFour;
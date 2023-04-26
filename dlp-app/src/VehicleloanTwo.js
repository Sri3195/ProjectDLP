import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import vloan from './vehicle-loan.jpg';
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "./ProgressBar";
function VehicleloanTwo() {
    const navigate = useNavigate()

    const [residenceCity, setResidenceCity] = useState('')

    const handleChange = (e) => {
        setResidenceCity(e.target.value)
    }

    const handleClick = () => {
        if (residenceCity === '') {
            window.alert("Please select your residential city !")
        }
        else {
            //localStorage.setItem('residenceCity',residenceCity)
            navigate("/vehicle-loan-step-three")
        }

    }
    const handleIconClick=()=>{
        navigate("/vehicle-loan-step-one")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={vloan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 5}}>
                <ProgressBar progress={15}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>City where you are residing?</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="mumbai" control={<Radio />} label="Mumbai" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="bangalore" control={<Radio />} label="Bangalore" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="hyderabad" control={<Radio />} label="Hyderabad" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="delhi" control={<Radio />} label="Delhi" onChange={handleChange} /></Card>
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
export default VehicleloanTwo;
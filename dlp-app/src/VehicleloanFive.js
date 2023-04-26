import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import vloan from './vehicle-loan.jpg';
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "./ProgressBar";
function VehicleloanFive() {
    const navigate = useNavigate()

    const [loanAmount, setLoanamount] = useState('')

    const handleChange = (e) => {
        setLoanamount(e.target.value)
    }

    const handleClick = () => {
        if (loanAmount === '') {
            window.alert("Please select you the loan amount !")
        }
        else {
            //localStorage.setItem('residenceCity',residenceCity)
            navigate("/vehicle-loan-step-six")
        }

    }
    const handleIconClick=()=>{
        navigate("/vehicle-loan-step-four")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={vloan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 5}}>
                <ProgressBar progress={60}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>How much would you like to borrow?</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="2 lakhs" control={<Radio />} label="2 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="3 lakhs" control={<Radio />} label="3 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="4 lakhs" control={<Radio />} label="4 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="5 lakhs" control={<Radio />} label="5 lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Another amount" control={<Radio />} label="Another amount" onChange={handleChange} /></Card>
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
export default VehicleloanFive;
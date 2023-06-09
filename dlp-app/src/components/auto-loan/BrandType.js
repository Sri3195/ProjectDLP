import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import vloan from "../../utils/vehicle-loan.jpg"
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "../../ProgressBar";
function BrandType() {
    const navigate = useNavigate()

    const [brandType, setBrandtype] = useState('')

    const handleChange = (e) => {
        setBrandtype(e.target.value)
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
        brandType: brandType
      }

    const handleClick = () => {
        if (brandType === '') {
            window.alert("Please select the brand type !")
        }
        else {
            localStorage.setItem('brandType',brandType)
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
            navigate("/vehicle-loan-time-period")
        }

    }
    const handleIconClick=()=>{
        navigate("/vehicle-loan-residing-city")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={vloan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 5}}>
                <ProgressBar progress={30}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>Which vehicle are you looking for?</center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Honda" control={<Radio />} label="Honda" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="Hyundai" control={<Radio />} label="Hyundai" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Ford" control={<Radio />} label="Ford" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="Tata" control={<Radio />} label="Tata" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Others" control={<Radio />} label="Others" onChange={handleChange} /></Card>
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
export default BrandType;
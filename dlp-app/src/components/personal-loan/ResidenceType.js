import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import ploan from "../../utils/personal-loan.jpg"
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "../../ProgressBar";
function ResidenceType() {
    const navigate = useNavigate()

    const [residenceType, setResidencetype] = useState('')

    const handleChange = (e) => {
        setResidencetype(e.target.value)
        
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
        bankAccount:localStorage.getItem('bankAccount'),
        company: localStorage.getItem('company'),
        residenceCity: localStorage.getItem('residenceCity'),
        residenceType: residenceType
    }
    const handleClick = () => {
        if (residenceType === '') {
            window.alert("Please select your residential city !")
        }
        else {
            localStorage.setItem("residenceType",residenceType)
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
            navigate("/personal-loan-loan-amount")
        }

    }
    const handleIconClick=()=>{
        navigate("/personal-loan-residence-city")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={ploan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 3}}>
                <ProgressBar progress={62.5}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>Select your residential type </center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="owned-by-self-spouse" control={<Radio />} label="Owned By Self/Spouse" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="owned-by-parents-siblings" control={<Radio />} label="Owned By Parents/Siblings" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="rented-with-family-alone" control={<Radio />} label="Rented with Family/Alone" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="paying-guest-hotel" control={<Radio />} label="Paying Guest/Hotel" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="company-provided" control={<Radio />} label="Company Provided" onChange={handleChange} /></Card>
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
export default ResidenceType;
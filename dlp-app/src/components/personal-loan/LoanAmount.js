import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel ,IconButton} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../../loans.css";
import ploan from "../../utils/personal-loan.jpg"
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "../../ProgressBar";
function LoanAmount() {
    const navigate = useNavigate()

    const [loanAmount, setLoanamount] = useState('')

    const handleChange = (e) => {
        setLoanamount(e.target.value)
        
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
        company: localStorage.getItem('company'),
        bankAccount:localStorage.getItem('bankAccount'),
        residenceCity: localStorage.getItem('residenceCity'),
        residenceType: localStorage.getItem('residenceType'),
        loanAmount: loanAmount
    }
    const handleClick = () => {
        if (loanAmount === '') {
            window.alert("Please select loan Amount !")
        }
        else {
            localStorage.setItem('loanAmount',loanAmount)
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
            navigate("/personal-loan-personal-details")
        }

    }
    const handleIconClick=()=>{
        navigate("/personal-loan-residence-type")
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={ploan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
                <Box sx={{ mt: 3 }}>
                <ProgressBar progress={75}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '600px', borderRadius: '10px' }}>
                    {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                    <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
                    <FormControl>
                        <FormLabel sx={{fontSize:'23px',mb:2, color:'#3498DB',ml:2,mr:10}} ><center>Select loan Amount </center></FormLabel>
                        <Grid>
                            <RadioGroup
                                row
                            >

                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="Upto 1 Lakh" control={<Radio />} label="Upto 1 Lakh" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="2-3 Lakhs" control={<Radio />} label="2-3 Lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="3-5 Lakhs" control={<Radio />} label="3-5 Lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"> <FormControlLabel value="5-10 Lakhs" control={<Radio />} label="5-10 Lakhs" onChange={handleChange} /></Card>
                                </Grid>
                                <Grid item>
                                    <Card className="radios-income"><FormControlLabel value="10+ Lakhs" control={<Radio />} label="10+ Lakhs" onChange={handleChange} /></Card>
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
export default LoanAmount;
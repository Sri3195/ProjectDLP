import { Card, Box, Typography, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./personalloan.css";
import ploan from './personal-loan2.jpg';
import ArrowBack from "@mui/icons-material/ArrowBack";
import TextField from '@mui/material/TextField';
import ProgressBar from "./ProgressBar";

function PersonalLoanSeven() {
    const navigate = useNavigate()

    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [dob,setDob]=useState('')
    const [pinCode,setPincode]=useState('')
    const [panCard,setPanCard]=useState('')
    const url=new URL('http://localhost:8002/v1/update')
    const params={
        id: localStorage.getItem('phNo')
      }
      url.search = new URLSearchParams(params).toString();

    let data={
        id: localStorage.getItem('phNo'),
        phNo: localStorage.getItem('phNo'),
        empType: localStorage.getItem('empType'),
        income: localStorage.getItem('income'),
        company: localStorage.getItem('company'),
        bankAccount:localStorage.getItem('bankAccount'),
        residenceCity: localStorage.getItem('residenceCity'),
        residenceType: localStorage.getItem('residenceType'),
        loanAmount: localStorage.getItem('loanAmount'),
        fullName: fullName,
        email: email,
        gender: gender,
        dob: dob,
        pinCode: pinCode,
        panCard:panCard
    }

    console.log(pinCode.length)
    const handleClick = () => {
        
         if (fullName === '' || email==='' || gender ==='' || dob==='' || pinCode ==='' || panCard==='') {
           window.alert("All fields must be filled !")
        }
        else if(onlyLetters(fullName)!=true){
            window.alert("Name field should not contain any special characters !")
        }
         else if(onlyNumbers(pinCode)!=true){
            window.alert("Pin Code should contain only digits!")
         }
         else if(pinCode.length !=6)
         {
            window.alert("Pin Code should be length 6 !")
         }
         else if(onlyNumbersAndNumbers(panCard)!=true){
            window.alert("Pan Card number should not contain special characters !")
         }
         else if(panCard.length !=10)
         {
            window.alert("Pan Card number should be length 10 !")
         }
         else if(validEmail(email)!=true){
            window.alert("Please enter valid Email Address !")
         }
        else {
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
            navigate("/personal-loan-step-final")
        }

    }
    const onlyLetters=(str)=> {
        return /^[A-Za-z\s]*$/.test(str)
      }
    
      const onlyNumbers=(str1)=> {
        return /^[0-9]*$/.test(str1)
      }
      const onlyNumbersAndNumbers=(str2)=> {
        return /^[A-Za-z0-9]*$/.test(str2)
      }

    const handleIconClick = () => {
        navigate("/personal-loan-step-six")
    }
    const validEmail=(str3)=>{
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(str3)
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src={ploan} alt="no-image found" style={{ height: '100vh', width: '45%' }} />
          
                <Box sx={{ mt: 1}}>
                <ProgressBar progress={82.5}/>
                    <Card sx={{ ml: '85px', width: '600px', height: '630px', borderRadius: '10px' }}>
                        {/*<h3 style={{marginLeft:'10px',marginBottom:'50px'}}>Start your loan application by selecting employment type</h3>*/}
                        <IconButton>
                            <ArrowBack fontSize='large' color='primary' sx={{ ml: 6, mt: 1 }} onClick={handleIconClick} />
                        </IconButton>
                        <FormControl>
                            <FormLabel sx={{ fontSize: '23px', ml: 5, color: '#3498DB', mr: 10 }} ><center>Selct enter your personal details </center></FormLabel>
                           
                                
                                    <TextField id="standard-basic" label="Full Name" variant="standard" sx={{ ml: 13,width: '400px', height: '50px' }}  onChange={(e)=>setFullName(e.target.value)}/>
                                
                                ''
                                    <TextField id="standard-basic" label="Email" type={"email"} variant="standard"  sx={{ ml: 13, mb: 1, width: '400px', height: '50px' }} onChange={(e)=>setEmail(e.target.value)} />
                                
                                    <Grid item sx={{ml:13}}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female"  onChange={(e)=>setGender(e.target.value)}/>
                                        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e)=>setGender(e.target.value)} />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e)=>setGender(e.target.value)} />
                                    </RadioGroup>
                                    </Grid>
                                <Grid item sx={{ml:13,mt:2}}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Date Of Birth</FormLabel>

                                    <input type="date"  style={{width:'400px', height: '50px'}} onChange={(e)=>setDob(e.target.value)}/>          
                                
                                    </Grid>
                                   
                                    <TextField id="standard-basic" label="Pin Code" variant="standard" sx={{ ml: 13, mt:2, width: '400px', height: '50px' }}  onChange={(e)=>setPincode(e.target.value)}/>
                               
                                
                                    <TextField id="standard-basic" label="PAN Card Number" variant="standard" sx={{ ml: 13, width: '400px', height: '50px' }}  onChange={(e)=>setPanCard(e.target.value)}/>
                                
                                
                                    <Button color="primary" variant="contained" sx={{ ml: 13, mt: 5, width: '410px', height: '50px' }} onClick={handleClick}>submit</Button>
                            

                           
                        </FormControl>
                        
                    </Card>
                </Box>
            </div>
        </>
    )
}
export default PersonalLoanSeven;
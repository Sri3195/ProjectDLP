import { Padding } from "@mui/icons-material";
import { Typography ,Box,TextField, Button,Card,IconButton} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from './bg.jpg';
import ploan from './personal-loan2.jpg';
import  ArrowBack from "@mui/icons-material/ArrowBack";
import ProgressBar from "./ProgressBar";


function PersonalLoanThree(){
    const navigate=useNavigate('')
    const [company,setCompany]=useState('')
    //localStorage.setItem('company',company)
    const handleChange = (e) => {
        setCompany(e.target.value)
        
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
        company:company
    }
    const handleClick=()=>{
        //console.log(phNo);
        if(company=== ''){
            window.alert("Please enter your company !")
        }
        else if(onlyLetters(company)!=true){
            window.alert("Please enter alphabets only !")
        }
        else{
            localStorage.setItem('company',company)
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
        navigate("/personal-loan-step-four")
        }

    }
    const handleIconClick=()=>{
        navigate("/personal-loan-step-two")
    }
    const onlyLetters=(str)=> {
        return /^[A-Za-z\s]*$/.test(str)
      }
      
    return(
        <>
        <div style={{display: 'flex'}}>
        <img src={ploan} alt="no-image found" style={{height: '100vh',width: '45%'}}/>
        <Box sx={{ mt: 5 }}>
        <ProgressBar progress={37.5}/>
        <Card sx={{ml: '80px',borderRadius:'10px', width: '600px', height: '530px'}}>
        <IconButton>
                      <ArrowBack fontSize='large' color='primary'sx={{ml:6,mt:1}} onClick={handleIconClick}/>
                    </IconButton>
            <center><Typography variant="h5" sx={{mt:7, color:'#3498DB'}}>Enter your Company name</Typography></center>
            <TextField id="outlined-basic" label="Enter Company Name" variant="outlined" sx={{mt:10,ml:13, mb:1,width:'400px',height:'100px'}}onChange={handleChange} />
            <center><Button color="primary" variant="contained"sx={{width:'400px',height:'50px'}} onClick={handleClick}>proceed</Button></center>
            
        </Card>
        
        </Box>
        </div>
        
        </>
    )
}
export default PersonalLoanThree;
import { PropaneSharp } from "@mui/icons-material";
import { LinearProgress, Typography,Box } from "@mui/material";
import { useState } from "react";
function ProgressBar(props){
    
    
    return(
       
        <>
            <Box sx={{ml: 11,mt:2}} >
            <Typography variant='body2' color='primary' sx={{ml:25}}>Completion</Typography>
         <LinearProgress variant="determinate" value={props.progress} sx={{width: '590px',height: '30px'}} />
         </Box>
        </>
    )
}
export default ProgressBar;
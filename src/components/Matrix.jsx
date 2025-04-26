import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const Matrix = () => {
  
  const [clickedBox, setClickedBox] = useState([])
  const [orangeBoxes, setOrangeBox] = useState([])
  
   const handleClickedBox = (index) =>{
  
     if(orangeBoxes.includes(index))
      {
        if(index===8)
        {
       setOrangeBox([]);
       setClickedBox([])
       return;
        }
      }
     
     setClickedBox((prev)=>
      {
        const updatedBoxIndexes = prev.includes(index) ? prev.filter((i)=>i !== index) : [...prev,index];

        if(index === 8)
        {
            updatedBoxIndexes.map((index,i)=>(
              setTimeout(()=>(
                 setOrangeBox((prev)=>[...prev,index])
              ),i*500)
            ))
        }
         return updatedBoxIndexes;
      }
      );
   }


  return (
    <Box  width={"100vw"} height={"100vh"}  display="flex"
    justifyContent="center"
    alignItems="center">
      <Grid container spacing={2} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} maxWidth={"21rem"} maxHeight={"25rem"} border={"2px solid blue"} paddingX={"0"}>
      {Array.from({ length: 9 }).map((_, index) => (
        <Grid item xs={4} key={index} onClick={()=>handleClickedBox(index)}>
          <Paper
            elevation={3}
            sx={{
              height: 100,
              width:100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              backgroundColor:orangeBoxes.includes(index) ? "orange" :clickedBox.includes(index)? "green" : "white",
            }}
          
          >
            Box {index + 1}
          </Paper>
        </Grid>
      ))}
      </Grid>
    </Box>
  )
}

export default Matrix

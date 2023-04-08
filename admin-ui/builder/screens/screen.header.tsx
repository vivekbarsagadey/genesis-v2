'use client'
import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Typography from "@mui/material/Typography";
// import Component1 from "./component1";
// import Component2 from "./component2";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton'
import MainPageComponent from './main.page';

const ScreenHeader = () => {
  const [openPage, setOpenPage] = useState("");
  return (
    <div>
      <Grid container style={{background:'black'}}>
        <Grid item xs={10} display="flex" p={1}>
          <div style={{border:'1px solid grey',borderRadius:'6px',background:'white'}}>
          <Typography variant='outlined' onClick={() => setOpenPage('dghg')}p={1}>
            Screen1 
          </Typography>
          <IconButton style={{padding:'0px'}}>
          <HighlightOffIcon/>
          </IconButton>
          </div>
          <div style={{border:'1px solid grey',borderRadius:'6px',background:'white',padding:'1px'}}>
          <Typography variant='outlined' onClick={() => setOpenPage('jhkjkh')} p={1}>
          Screen 2     
           <IconButton style={{padding:'0px'}}>
          <HighlightOffIcon/>
          </IconButton>
          </Typography>
    
          </div>
        </Grid>
        <Grid item xs={2} style={{display:'flex',justifyContent:'space-around',float:'right',alignItems:'center'}}>
          {/* <Grid container style={{ float: "right" }}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "space-between" }}> */}
              <Button variant="contained" style={{ height: "5vh",width:'2wh'}} >
                Save
              </Button>
              <PhoneAndroidIcon fontSize="small" style={{color:'white'}}/>
              <WebAssetIcon fontSize="small" style={{color:'white'}}/>
            </Grid>
          {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
      {/* <Grid item xs={12}>
        {openPage}
      </Grid> */}
      {/* <MainPageComponent openPage={openPage}/> */}
    </div>
  )
}

export default ScreenHeader
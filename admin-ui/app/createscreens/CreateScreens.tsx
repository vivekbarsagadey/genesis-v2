"use client"
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const CreateScreens = () => {
  return (
    <div>
     <Grid container mt={2}>
        <Typography>Create</Typography>
        <Grid item xs={2}></Grid>
        <Grid item xs={4.2}>
        <TextField id="outlined-basic" variant="outlined" fullWidth style={{height:'20vh'}}/>
        </Grid>
        <Grid item xs={0.5}>
        </Grid>
        <Grid item xs={2} mt={1}>
            <Button variant="contained">Save</Button>
        </Grid>
     </Grid>
    </div>
  );
};

export default CreateScreens;

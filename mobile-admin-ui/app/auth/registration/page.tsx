"use client";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { InputTextComponent, InputPasswordComponent} from "../../components/input";
import ButtonComponent from "../../components/button/ButtonComponent";

const RegisterComponent = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={3.5}>
                    <Card>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputTextComponent lable="First Name" isRequired={ true} />
                </Grid>
                <Grid item xs={12}>
                    <InputTextComponent lable="Last Name" isRequired={ true}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <InputTextComponent lable="Phone number" isRequired={ true}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <InputTextComponent lable="Email" placeholder="abc@gmail.com" isRequired={ true}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <InputTextComponent lable="Date Of birth" isRequired={ true}/>
                    
                </Grid>
                <Grid item xs={12}>
                    <ButtonComponent label="Register"/>
                    
                </Grid>
                </Grid>
                </Card>
            </Grid>
            </Grid>
        </>
    )
}

export default RegisterComponent;

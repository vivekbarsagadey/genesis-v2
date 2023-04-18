"use client";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
    error_style: {
        color: "red",
        margin: "0px",
        padding:"0px",
        fontWeight: "bold",
        fontSize: "15px",
    }
})

interface InputTextComponentPorps{ 
    lable: string;
    isRequired? : boolean
    placeholder:string
}

const InputTextComponent = ({ lable, isRequired,placeholder }: InputTextComponentPorps) => {
    const[value, setValue] = useState<string>();
    const[messages, setMessages] = useState<string[]>([]);


    const onChangeHandler = (event : any ) => { 
        if (event.target.value) {
            setValue(event.target.value)       
            setMessages([])     
        } else { 
            setValue('')
            setMessages([])
            if (isRequired) { 
                setMessages([`${lable} is required`])
            }
        }

        
    }

    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                {lable}
            </Grid>
            <Grid item xs={12}>
                <input type="text" value={value} placeholder={placeholder} onChange={onChangeHandler}/>
            </Grid>
            {isRequired && <Grid item xs={12} >
                {messages.map((m, i) => { 
                   return  <div key={i} className={classes.error_style}> { m} </div>
                })}
                </Grid>
            }
        </Grid>
    )
}

export { InputTextComponent };

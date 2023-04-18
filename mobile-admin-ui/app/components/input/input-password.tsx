"use client";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

interface InputPasswordComponentPorps{ 
    lable: string;
    isRequired? : boolean
}

const InputPasswordComponent = ({ lable, isRequired }: InputPasswordComponentPorps) => {
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

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                {lable}
            </Grid>
            <Grid item xs={12}>
                <input type="password" value={value}  onChange={onChangeHandler}/>
            </Grid>
            {isRequired && <Grid item xs={12} >
                {messages.map((m, i) => { 
                   return  <div key={i}> { m} </div>
                })}
                </Grid>
            }
        </Grid>
    )
}

export { InputPasswordComponent };

'use client'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
    <Grid container>
        <Grid item xs={2}>
            <Button variant="contained">New</Button>
        </Grid>
        <Grid item xs={1}>
            <Typography>Project Name</Typography>
        </Grid>
        <Grid item xs={9}>
            <Grid container float='right'>
                <Grid item xs={12} display='flex' justifyContent='space-between'>
                    email
                    setting
                    notification
                    profile
                </Grid>
            </Grid>
         
        </Grid>

    </Grid>
    </>
  )
}

export default Header

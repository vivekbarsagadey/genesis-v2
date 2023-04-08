import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const MainPageComponent = ({openPage}) => {
  return (
    <>
     <div style={{background:'grey',height:'50vh'}}>
        <Grid container style={{display:'flex',justifyContent:'center'}}   spacing={2} >
            <Grid item xs={4} style={{height:'70vh',background:'white'}} >
               <Typography>hii </Typography>
            </Grid>
        </Grid>
     </div>

   </>

   
  )
}

export default MainPageComponent
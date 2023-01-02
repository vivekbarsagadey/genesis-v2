import React from 'react'
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import AppsIcon from "@mui/icons-material/Apps";
import { useSession } from 'next-auth/react';
const LayoutComponent = ({
    children,
    ...props
}:{children : React.ReactNode}) => {
    const { data: session } = useSession();
  return (
    <>
  {session &&  <Grid container spacing={2}>
          <Grid item xs={2} display="flex">
            <AppsIcon />
            <Typography>Project</Typography>
          </Grid>
          <Grid item xs={10}>
          
            {children}
          </Grid>
        </Grid>} 
        {!session && (
            <div>
                {children}
            </div>
        )}
        </>
  )
}

export default LayoutComponent
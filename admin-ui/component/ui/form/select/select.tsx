import { Autocomplete, Grid, Typography } from '@mui/material'
import React from 'react'

const FormSelectComponent = ({header,subData,onChange}) => {
  return (
    <Grid container >
      <Grid item xs={3} >
        <Typography >{header}</Typography>
        <span >{}</span>
      </Grid>
      <Grid item xs={2}>
        <Typography>:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          disablePortal
          value={companyStatus}
          onChange={getCompanyStatusValue}
          id="status"
          size="small"
          options={statusSet?.map((option: any) => option)}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select Status" />
          )}
        />
      </Grid>
    </Grid>
  )
}

export { FormSelectComponent }
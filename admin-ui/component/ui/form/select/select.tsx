import { Autocomplete, Grid, TextField, Typography } from '@mui/material'

const FormSelectComponent = ({ id, size, header, subData, value, onChange, placeholder, mainData, disablePortal }: InputSelectInterface) => {
  return (
    <Grid container display="flex" alignItems="center" >
      <Grid item xs={3} >
        <Typography >{header}</Typography>
        <span >{subData}</span>
      </Grid>
      <Grid item xs={2}>
        <Typography>:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          disablePortal={disablePortal}
          value={value}
          onChange={(e) => onChange(e.target.outerText)}
          id={id}
          size={size}
          getOptionLabel={(option) => option}
          options={mainData?.map((option: any) => option)}
          renderInput={(params) => (
            <TextField {...params} placeholder={placeholder} />
          )}
        />
      </Grid>
    </Grid>
  )
}

export { FormSelectComponent }

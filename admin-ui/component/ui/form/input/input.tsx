import { Grid, TextField, Typography } from '@mui/material'
import { InputFieldInterface } from "./input.interface"

const FormInput = ({ header, subContent, Id, placeholder, variant, size, value }: InputFieldInterface) => {
  return (
    <Grid container spacing={2} mt={3} paddingLeft={5}>
      <Grid item xs={6}>
        <Grid container >
          <Grid item xs={3} >
            <Typography>{header}</Typography>
            <span >{subContent}</span>
          </Grid>
          <Grid item xs={2}>
            <Typography>:</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id={Id}
              placeholder={placeholder}
              variant={variant}
              size={size}
              fullWidth
              value={value}
              onChange={() => { }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export { FormInput }

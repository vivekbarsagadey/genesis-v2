import { Grid, TextField, Typography } from '@mui/material'
import { InputFieldInterface } from "./input.interface"

const FormInput = ({ header, subContent, id, placeholder, variant, size, value, onChange }: InputFieldInterface) => {
  return (
    <Grid container display="flex" alignItems="center">
      <Grid item xs={3} >
        <Typography>{header}</Typography>
        <span >{subContent}</span>
      </Grid>
      <Grid item xs={2}>
        <Typography>:</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id={id}
          placeholder={placeholder}
          variant={variant}
          size={size}
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export { FormInput }


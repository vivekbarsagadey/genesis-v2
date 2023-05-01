'use client';

import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import {
  ValidatorContextBuilder,
  ValidatorType,
} from '../../../../validation/engine';
import { ErrorComponent, InputProps } from '.';

function InputEmailComponent({
  label,
  id,
  placeHolder,
  value,
  required,
  register,
}: InputProps) {
  const [_value, setValue] = useState<string>('');
  const [errors, setErrors] = useState<string[]>();

  const update: any = register({ name: label ?? '' });
  const _builder = new ValidatorContextBuilder(label);

  _builder.addValidator({
    field: label ?? '',
    validatorType: ValidatorType.REQUIRED,
    message: `${label} is required`,
  });
  _builder.addValidator({
    field: label ?? '',
    validatorType: ValidatorType.EMAIL,
    message: `${label} is unsatisfied`,
  });

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setErrors(_builder.doValidation(e.target.value));
    update({ name: label, value: e.target.value, errors: [errors] });
  };

  useEffect(() => {
    setValue(value ?? '');
  }, []);
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography>{label || 'Field Name'}</Typography>
      <Input
        required={required}
        id="standard-required"
        placeholder={placeHolder}
        type="email"
        value={value}
        onChange={handleChange}
        startAdornment={(
          <InputAdornment position="start">
            <MailIcon />
          </InputAdornment>
				)}
      />

      {errors?.map((e, i) => (
        <ErrorComponent key={i} message={e} />
      ))}
    </Box>
  );
}

export { InputEmailComponent };

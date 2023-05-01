interface InputProps {
  label: string;
  id?: string;
  value?: string;
  placeHolder?: string;
  required?: boolean;
  type: string;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  autofocus?: boolean;
  autocomplete?: string;
  startAdornment?: any;
  helperText?: any;
  getError?: any;
  onInput?: number;
  variant?:any;
  onClick?:any;

  // this to send data back to parent
  register?: any;
}

export type { InputProps };

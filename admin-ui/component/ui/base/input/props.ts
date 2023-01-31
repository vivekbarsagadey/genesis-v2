// validatoters

type defaultString = string | undefined | null
export default interface InputProps {
  label?: defaultString;
  id?: string;
  value?: defaultString;
  placeHolder?: string;
  required?: boolean;
  type: string;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  autofocus?: boolean;
  autocomplete?: string;
  startAdornment?: any;
  helperText?:any;
  getError?:any;
  textLength?:number
  onInput?:number
  icon?:any
  errorIcon?:any
  // this to send data back to parent
  register?: (_: string) => any;
}


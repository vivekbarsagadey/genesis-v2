// validatoters
export default interface InputProps {
  // sendind data from parent to child
  label?: string;
  id?: string;
  value?: string;
  placeHolder?: string;
  required?: boolean;
  type?: string;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  autofocus?: boolean;
  autocomplete?: string;
  startAdornment?: any;
  helperText?:any;
  getError?:any;
  getData?:any
  charLength?:number
  icon?:any
  // this to send data back to parent
  register?: (_: string) => any;
}

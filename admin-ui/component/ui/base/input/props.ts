// validatoters

type defaultString = string | undefined | null;
interface InputProps {
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
  helperText?: any;
  getError?: any;
  onInput?: number;

  // this to send data back to parent
  register?: (_: string) => any;
}

export type { InputProps };

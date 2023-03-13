// validatoters

import { FormStore, InputHolder } from "../../../../hooks";

  type InputProps = {
  label?: string;
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

  // this to send data back to parent
  register?: (_: InputHolder) => (_: FormStore) => void;

}

export type { InputProps };

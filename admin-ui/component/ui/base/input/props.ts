// validatoters

import { InputHolder,FormStore } from "../../../../hooks";
type InputProps = {
  // sending data from parent to child
  readonly label?: string | undefined;
  readonly isLabelNotRequired?: boolean;
  readonly id?: string;
  value?: string;
  placeHolder?: string;
  required?: boolean;
  readonly type?: string;
  readonly readonly?: boolean;
  helperText?: string | undefined;
  icons?: string;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly autofocus?: boolean;
  // this to send data back to parent
  register: (_: InputHolder) => (_: FormStore) => void;
};

export type { InputProps };

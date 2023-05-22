type InputFieldInterface = {
  header: string,
  subContent?: string,
  
  autoComplete?:boolean,
  autoFocus?:boolean,
  color?:string,
  defaultValue?:string,
  id?: string,
  placeholder?: string,
  variant?: string | undefined,
  size?: string | undefined,
  value?: string | any | undefined,
  onChange?:any
}

export type { InputFieldInterface }
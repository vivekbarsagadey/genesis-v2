type InputFieldInterface = {
  header: string,
  subContent: string,
  Id: string,

  autoComplete:boolean,
  autoFocus:boolean,
  color:string,
  
  placeholder: string,
  variant: string | undefined,
  size: string | undefined,
  value: string | any | undefined
}

export type { InputFieldInterface }
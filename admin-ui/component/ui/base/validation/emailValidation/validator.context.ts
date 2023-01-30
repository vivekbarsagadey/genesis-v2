enum ValidationEmailStatus {
  REQUIRED,
  EMAIL,
  PASSWORD,
  TEXT,
  NUMBER
  
}

 export default interface ValidationContext {
  data: any;
  name?: string;
  status: ValidationEmailStatus[];
}

export { ValidationEmailStatus };

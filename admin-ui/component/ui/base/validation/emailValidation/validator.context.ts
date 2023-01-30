enum ValidationStatus {
  REQUIRED,
  EMAIL,
  PASSWORD,
  TEXT,
  NUMBER
  
}

 export default interface ValidationContext {
  data: any;
  name?: string;
  status: ValidationStatus[];
}

export { ValidationStatus };

enum ValidationEmailStatus {
  REQUIRED,
  EMAIL,
}

export default interface ValidationEmailContext {
  data: any;
  name?: string;
  status: ValidationEmailStatus[];
}

export { ValidationEmailStatus };

import { Constraint } from './';

interface ValidationErrorRow {
  row: any;
  _errors: ValidationError[];
}

class ValidationErrors {
  private _isError: boolean = false;
  private errorRows: ValidationErrorRow[] = [];

  public add({ row, _errors }: ValidationErrorRow) {
    if (_errors && _errors.length > 0) {
      this._isError = true;
      this.errorRows.push({ row, _errors });
    }
  }

  public init() {
    this._isError = false;
    this.errorRows = [];
  }

  public isError() {
    return this._isError;
  }

  public getAllErrors() {
    const _: ValidationError[] = [];
    const _errors: ValidationError[] = this.errorRows.reduce((acc, curr) => {
      acc.push(...curr._errors);
      return acc;
    }, _);
    return _errors;
  }

  public getErroredRows() {
    return this.errorRows;
  }
}

class ValidationError extends Error {
  constructor(private constraint: Constraint) {
    super(constraint.message);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  setErrorMessage(message: string) {
    this.constraint.message = message;
  }

  getErrorMessage() {
    return this.constraint.message || `${this.constraint.field} is not valid`;
  }
  getErrorConstraint() {
    return this.constraint;
  }
}

export { ValidationError, ValidationErrors };
export type{ ValidationErrorRow };

import { ValidationError, ValidationContext, ValidationErrors, Constraint } from '.';
import { validate as _validate } from '../rules';

class ValidatorContextBuilder {
  private constraints = new Array<Constraint>();
  private label: string = '';
  private _error: ValidationErrors = new ValidationErrors();
  constructor(label: string | undefined) {
    this.label = label || '';
    this.constraints = new Array<Constraint>();
  }

  public addValidator(constraint: Constraint) {
    this.constraints.push(constraint);
  }

  public doValidation = (_v: string) => {
    this._error = new ValidationErrors();
    this._error.add({
      row: _v,
      _errors: ValidationEngine.validate({
        data: _v,
        constraints: this.constraints,
        name: this.label,
      }),
    });
    if (this._error.isError()) {
      return this._error.getAllErrors().map((e) => e.getErrorMessage());
    }

    return [];
  };
}

const ValidationEngine = {
  validate(context: ValidationContext): ValidationError[] {
    return _validate(context);
  },
};

export { ValidationEngine, ValidatorContextBuilder };

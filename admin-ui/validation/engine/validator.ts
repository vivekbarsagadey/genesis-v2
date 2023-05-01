enum ValidatorType {
  REQUIRED = 'required.rule',
  EMAIL = 'email.rule',
  PASSWORD = 'password.rule',
  TEXT = 'text.rule',
  NUMBER = 'number.rule',
}

interface Validator<T> {
  isValid(value: T): boolean;
  getMessage(): string;
}

export { ValidatorType };
export type { Validator };

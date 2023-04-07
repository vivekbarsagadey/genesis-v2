import { ValidationContext, ValidationError } from "../engine";
import { EmailRule } from "./email.rule";
import { NumberRule } from "./number.rule";
import { PasswordRule } from "./password.rule";
import { RequiredRule } from "./required.rule";
import { RuleContext } from "./rule.context";

const doValidation = (_errors: ValidationError[], context: RuleContext) => {
  const ruleSet = [];

  ruleSet.push(RequiredRule(context));
  ruleSet.push(EmailRule(context));
  ruleSet.push(PasswordRule(context));
  ruleSet.push(NumberRule(context));

  ruleSet.forEach((rule) => {
    try {
      if (rule.condition()) {
        rule.action();
      }
    } catch (e) {
      if (e instanceof ValidationError) {
        _errors.push(e);
      }
    }
  });
};

const validate = (context: ValidationContext): ValidationError[] => {
  const _errors = new Array<ValidationError>();
  context.constraints?.forEach((constraint) => {
    doValidation(_errors, { data: context.data, constraint, name: context.name });
  });
  return _errors;
};

export { validate };
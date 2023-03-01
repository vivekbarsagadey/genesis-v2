import { RequiredRule } from "./required.rule";
import { RuleContext } from "./rule.context";
import { EmailRule } from "./email.rule";
import { ValidationError } from "../validation.error";
import { ValidationContext } from "../validator.context";

export { EmailRule } from "./email.rule";
export { NumberRule } from "./number.rule";
export { PasswordRule } from "./password.rule";
export { RequiredRule } from "./required.rule";
export { TextRule } from "./text.rule";
export type {RuleContext} from "./rule.context"

function doValidation(_errors: ValidationError[], context: RuleContext) {
  const ruleSet = [];
  ruleSet.push(RequiredRule(context));
  ruleSet.push(EmailRule(context));

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
}

export const validate = (context: ValidationContext): ValidationError[] => {
  const _errors = new Array<ValidationError>();
  context.constraints?.forEach((constraint) => {
    doValidation(_errors, {
      data: context.data,
      constraint,
      name: context.name,
    });
  });
  return _errors;
};

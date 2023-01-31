import { ValidatationError } from "..";
import { EmailRule } from "./rules/email.rule";
import { NumberRule } from "./rules/number.rule";
import { PasswordRule } from "./rules/password.rule";
import { RequiredRule } from "./rules/required.rule";
import { TextRule } from "./rules/text.rule";
import ValidationContext, {
  ValidationStatus,
} from "./validator.context";

const ValidatationEngine = () => {
  const execute = ({
    data,
    status,
    name,
  }: ValidationContext): ValidatationError[] => {
    const errors: ValidatationError[] = [];
    const ruleSet: any[] = build({ data, status, name });
    ruleSet.forEach((r) => {
      try {
        if (r.condition()) {
          r.action();
        }
      } catch (e) {
        if (e instanceof ValidatationError) {
          errors.push(e);
        }
      }
    });
    return errors;
  };

  const build = ({ data, status, name }: ValidationContext): any[] => {
    const ruleSet: any[] = [];
    status.forEach((s) => {
      switch (s) {
        case ValidationStatus.REQUIRED:
          ruleSet.push(RequiredRule({ data, status: s, name: name }));
          break;
        case ValidationStatus.EMAIL:
          ruleSet.push(EmailRule({ data, status: s, name: name }));
          break;
        case ValidationStatus.PASSWORD:
          ruleSet.push(PasswordRule({ data, status: s, name: name }));
          break;
        case ValidationStatus.TEXT:
          ruleSet.push(TextRule({ data, status: s, name: name }));
          break;
        case ValidationStatus.NUMBER:
          ruleSet.push(NumberRule({ data, status: s, name: name }));
          break;
      
        default:
          console.error("This rule is not supported ....");
      }
    });
    return ruleSet;
  };
  return { execute };
};

export { ValidatationEngine };

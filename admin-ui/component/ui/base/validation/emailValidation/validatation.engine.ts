import { ValidatationError } from "..";
import { EmailRule } from "./rules/email.rule";
import { NumberRule } from "./rules/number.rule";
import { PasswordRule } from "./rules/password.rule";
import { RequiredRule } from "./rules/required.rule";
import { TextRule } from "./rules/text.rule";
import ValidationEmailContext, {
  ValidationEmailStatus,
} from "./validator.context";

const ValidatationEngine = () => {
  const execute = ({
    data,
    status,
    name,
  }: ValidationEmailContext): ValidatationError[] => {
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

  const build = ({ data, status, name }: ValidationEmailContext): any[] => {
    const ruleSet: any[] = [];
    status.forEach((s) => {
      switch (s) {
        case ValidationEmailStatus.REQUIRED:
          ruleSet.push(RequiredRule({ data, status: s, name: name }));
          break;
        case ValidationEmailStatus.EMAIL:
          ruleSet.push(EmailRule({ data, status: s, name: name }));
          break;
        case ValidationEmailStatus.PASSWORD:
          ruleSet.push(PasswordRule({ data, status: s, name: name }));
          break;
        case ValidationEmailStatus.TEXT:
          ruleSet.push(TextRule({ data, status: s, name: name }));
          break;
        case ValidationEmailStatus.NUMBER:
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

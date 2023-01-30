import { ValidationStatus } from "../validator.context";

export interface RuleContext{
    data: any;
    name?: string;
    status: ValidationStatus;
}


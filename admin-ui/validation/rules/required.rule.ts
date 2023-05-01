import { ValidationError, ValidatorType } from '../engine';
import { RuleContext } from './rule.context';
import { isBlank } from './string.utils';

const RequiredRule = ({ constraint, data }: RuleContext) => {
	const condition = (): boolean => constraint.validatorType === ValidatorType.REQUIRED;

	const action = () => {
		if (isBlank(data)) {
			throw new ValidationError(constraint);
		}
	};

	return { condition, action };
};

export { RequiredRule };

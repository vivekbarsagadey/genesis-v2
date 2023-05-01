'use client';

import {
	InputEmailComponent,
	InputNumberComponent,
	InputPasswordComponent,
	InputProps,
	InputTextComponent,
} from '.';

function InputComponent(props: InputProps) {
	if (props.type == 'email') {
		return <InputEmailComponent {...props} />;
	}
	if (props.type == 'password') {
		return <InputPasswordComponent {...props} />;
	}
	if (props.type == 'text') {
		return <InputTextComponent {...props} />;
	}
	if (props.type == 'number') {
		return <InputNumberComponent {...props} />;
	}

	return <></>;
}

export { InputComponent };

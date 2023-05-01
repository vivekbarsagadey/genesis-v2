'use client';

import { InputHolder } from './input.holder';

type FormStore = {
  name: string;
  value: string;
  errors?: string[];
};

const formStore = new Map<string, FormStore>();
const useForm = () => {
	let message;

	const register = ({ name } : InputHolder) => {
		formStore.set(name, { name, value: '', errors: [] });
		message = `this is ${name}`;
		return update;
	};

	const update = ({ name, value, errors = [] }:FormStore) => {
		formStore.set(name, { name, value, errors });
	};

	const isError = () => {
		for (const key of formStore.keys()) {
			console.log(key);
		}
	};

	const submit = () => {

	};

	return {
		register, update, isError, message, submit,
	};
};

export type { FormStore };
export { useForm };

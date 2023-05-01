const isBlank = (value : string):boolean => !isNotBlank(value);

const isNotBlank = (value : string|null|undefined):boolean => {
	if (value && value.trim() !== '') {
		return true;
	}
	return false;
};

export { isBlank, isNotBlank };

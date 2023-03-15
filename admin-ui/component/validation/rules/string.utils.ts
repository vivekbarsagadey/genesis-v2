const isBlank = (value: string): boolean => {
  return !isNotBlank(value);
};

const isNotBlank = (value: string): boolean => {
  if (value && value.trim() !== "") {
    return true;
  }
  return false;
};

export { isBlank, isNotBlank };

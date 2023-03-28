const isLength = (value: string): boolean => {
  return !isNotLength(value);
};

const isNotLength = (value: string): boolean => {
  if (value.length > 10 || value.length<10) {
    return false;
  }
  return true;
};

export { isLength, isNotLength };

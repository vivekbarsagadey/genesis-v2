const isLength = (value: string): boolean => {
  return !isNotLength(value);
};

const isNotLength = (value: string): boolean => {
  if (value.length ==10) {
    return true;
  }
  return false;
};

export { isLength, isNotLength };

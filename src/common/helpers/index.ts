export const validateArrayToBeNumbers = (...array: Array<string | number>) => {
  return array.every(
    item => typeof +item === 'number' && !isNaN(+item) && item !== '',
  );
};

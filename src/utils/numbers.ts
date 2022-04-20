export const toFixedDecimal = (input: string) => {
  const parsed = parseFloat(input) / 1000000;
  return parsed.toFixed(6);
};

export const fixedDecimal = (value: number, fixed: number): number => {
  return parseFloat(value.toFixed(fixed));  
};

export const formattedCurrency = (value: number): string => {
    return value.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"});
};

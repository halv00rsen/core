const emailPattern = /\S+@\S+\.\S+/;

export const isValidEmail = (str: string): boolean => {
  return !!str.match(emailPattern);
};

const colors = {
  blue: '#468499',
  red: '#bd3038',
  green: '#8fbc8f',
} as const;

export type Color = keyof typeof colors;

export type ButtonColor = Color;

export const getColor = (color: Color): string => {
  return colors[color];
};

export const getButtonColor = (color: ButtonColor): string => {
  return colors[color];
};

const colors = {
  blue: '#468499',
  red: '#bd3038',
  green: '#8fbc8f',
  white: 'white',
  gray: '#d8d8d8',
  black: 'black',
  transparent: 'transparent',
  yellow: '#f2e449',
} as const;

export type Color = keyof typeof colors;

export type ButtonColor = Color;

// export type AlertColor = ;

export const getColor = (color: Color): string => {
  return colors[color];
};

export const getButtonColor = (color: ButtonColor): string => {
  return colors[color];
};

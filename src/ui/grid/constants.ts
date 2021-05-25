export const smallScreenMax = 300;
export const mediumScreenMax = 500;
export const largeScreenMax = 750;
export const xtraLargeScreenMax = 1000;

export const containerPadding = 20;

export const numColumns = 12;

export const gutterSize = 5;

export type ScreenSize = 'small' | 'medium' | 'large' | 'extraLarge';

export const getMaxScreenWidth = (screenSize: number): [number, ScreenSize] => {
  if (screenSize <= smallScreenMax) {
    return [smallScreenMax, 'small'];
  } else if (screenSize <= mediumScreenMax) {
    return [mediumScreenMax, 'medium'];
  } else if (screenSize <= largeScreenMax) {
    return [largeScreenMax, 'large'];
  }
  return [xtraLargeScreenMax, 'extraLarge'];
};

export const getChildrenWidthPercentage = (numChildren: number): number => {
  if (numChildren > numColumns) {
    return 100 / numColumns;
  }
  return 100 / numChildren;
};

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const getColumnSize = (columns?: ColumnSize): number | undefined => {
  if (!columns) {
    return undefined;
  }
  if (columns > numColumns || columns <= 0) {
    return 100;
  }
  return (100 / numColumns) * columns;
};

export interface SizeProps {
  small?: ColumnSize;
  medium?: ColumnSize;
  large?: ColumnSize;
  xlarge?: ColumnSize;
}

export const getColumnWidth = (
  sizes: SizeProps,
  screenSize: number
): number | undefined => {
  const { large, medium, small, xlarge } = sizes;
  const [, size] = getMaxScreenWidth(screenSize);
  if (size === 'small') {
    return getColumnSize(small);
  } else if (size === 'medium') {
    return getColumnSize(medium || small);
  } else if (size === 'large') {
    return getColumnSize(large || medium || small);
  } else if (size === 'extraLarge') {
    return getColumnSize(xlarge || large || medium || small);
  }
  return undefined;
};

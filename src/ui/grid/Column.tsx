import React, { useContext } from 'react';
import styled from 'styled-components';
import { getColumnWidth, SizeProps } from './constants';
import { WidthContext } from './context';

interface ColumnUIProps {
  size?: number;
}

const ColumnUI = styled.div<ColumnUIProps>`
  ${(props) => props.size && `width: ${props.size}%`}
`;

export interface ColumnProps extends SizeProps {
  children: React.ReactNode;
}

export const Column = ({ children, large, medium, small }: ColumnProps) => {
  const containerWidth = useContext(WidthContext);
  const size = getColumnWidth({ large, medium, small }, containerWidth);
  return <ColumnUI size={size}>{children}</ColumnUI>;
};

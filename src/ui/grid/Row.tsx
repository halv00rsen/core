import React from 'react';
import styled from 'styled-components';
import { getChildrenWidthPercentage, gutterSize } from './constants';

interface RowUIProps {
  numChildren: number;
  gutters: boolean;
}

const RowUI = styled.div<RowUIProps>`
  display: flex;
  flex-wrap: wrap;

  & > * {
    box-sizing: border-box;

    width: ${(props) => getChildrenWidthPercentage(props.numChildren)}%;
    ${(props) => props.gutters && `padding: ${gutterSize}px`};
  }
`;

export interface RowProps {
  children: React.ReactNode[] | React.ReactNode;
  gutters?: boolean;
}

export const Row = ({ children, gutters = true }: RowProps) => {
  const numChildren = (children as React.ReactNode[]).length || 1;
  return (
    <RowUI numChildren={numChildren} gutters={gutters}>
      {children}
    </RowUI>
  );
};

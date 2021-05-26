import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../ui';
import { Button } from '../button/Button';

type AlertType = 'INFO' | 'ERROR' | 'WARNING';

const getAlertColor = (alert: AlertType): string => {
  if (alert === 'INFO') {
    return getColor('blue');
  } else if (alert === 'ERROR') {
    return getColor('red');
  } else {
    return getColor('yellow');
  }
};

const AlertUI = styled.div<{ type: AlertType }>`
  background-color: ${(props) => getAlertColor(props.type)};
  color: ${(props) => (props.type === 'WARNING' ? 'black' : 'white')};
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
`;

export interface AlertProps {
  type: AlertType;
  children: React.ReactNode | React.ReactNodeArray;
  onClose?: () => void;
}

export const Alert = ({ type, children, onClose }: AlertProps) => {
  return (
    <AlertUI type={type}>
      {children}
      {onClose && (
        <Button backgroundColor={'transparent'} onClick={onClose}>
          Lukk
        </Button>
      )}
    </AlertUI>
  );
};

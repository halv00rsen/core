import React, { Ref } from 'react';
import styled from 'styled-components';
import { ButtonColor, getButtonColor } from '../../ui/color';

interface ButtonUIProps {
  backgroundColor: string;
}

const ButtonUI = styled.button<ButtonUIProps>`
  border: none;
  border-radius: 5px;
  padding: 7px 9px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  opacity: 1;
  transition: 0.3s;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #ebebeb;

  &:hover {
    opacity: 0.9;
  }
`;

export interface ButtonProps {
  backgroundColor?: ButtonColor;
}

export const Button = ({
  children,
  backgroundColor = 'blue',
  ...rest
}: ButtonProps &
  JSX.IntrinsicElements['button'] & { ref?: Ref<HTMLButtonElement> }) => {
  return (
    <ButtonUI backgroundColor={getButtonColor(backgroundColor)} {...rest}>
      {children}
    </ButtonUI>
  );
};

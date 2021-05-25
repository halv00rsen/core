import React, { Ref } from 'react';
import styled from 'styled-components';
import { Color, getColor } from '../../ui';

interface Props {
  color: Color;
}

const InputUI = styled.input<Props>`
  padding: 7px;
  border-color: ${(props) => getColor(props.color)};
  border-style: solid;
  width: 100%;
  box-sizing: border-box;
  transition: 0.3s;
`;

interface LabelProps {
  color: Color;
  show: boolean;
}

const LabelUI = styled.label<LabelProps>`
  color: ${(props) => getColor(props.color)};
  font-size: 14px;
  padding-left: 8px;
  transition: 0.3s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  height: 16px;
`;

const Wrapper = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'column' : 'column-reverse')};
`;

export interface InputProps {
  color?: Color;
  labelText?: string;
  labelColor?: Color;
  labelAbove?: boolean;
}

export const Input = ({
  color = 'gray',
  labelText = '',
  labelColor = 'black',
  labelAbove = true,
  ...rest
}: InputProps &
  JSX.IntrinsicElements['input'] & { ref?: Ref<HTMLInputElement> }) => {
  return (
    <Wrapper reverse={labelAbove}>
      <LabelUI show={!!labelText} color={labelColor}>
        {labelText}
      </LabelUI>
      <InputUI {...rest} color={color} />
    </Wrapper>
  );
};

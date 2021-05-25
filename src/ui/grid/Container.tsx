import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { containerPadding, getMaxScreenWidth } from './constants';
import { WidthContext } from './context';
import { useScreenWidth } from './helpers';

interface ContainerUIProps {
  maxWidth: number;
}

const ContainerUI = styled.div<ContainerUIProps>`
  padding: 0 ${containerPadding}px;
  max-width: ${(props) => props.maxWidth}px;
`;

export interface ContainerProps {
  children: React.ReactNode;
  screenWidthColumns?: boolean;
}

export const Container = ({
  children,
  screenWidthColumns = false,
}: ContainerProps) => {
  const element = useRef<HTMLDivElement>(null);
  const screenWidth = useScreenWidth();
  const [containerWidth, setContainerWidth] = useState(screenWidth);

  useEffect(() => {
    const rect = element.current?.getBoundingClientRect();
    setContainerWidth((!screenWidthColumns && rect?.width) || screenWidth);
  }, [screenWidth, screenWidthColumns]);

  return (
    <ContainerUI maxWidth={getMaxScreenWidth(screenWidth)[0]} ref={element}>
      <WidthContext.Provider value={containerWidth}>
        {children}
      </WidthContext.Provider>
      <div>
        {containerWidth} - {getMaxScreenWidth(containerWidth).join(', ')}
      </div>
    </ContainerUI>
  );
};

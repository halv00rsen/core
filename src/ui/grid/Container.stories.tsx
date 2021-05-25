import React from 'react';
import { Container, ContainerProps } from './Container';
import { Row } from './Row';
import { Column } from './Column';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

const Border = styled.div`
  border: 1px solid black;
  padding: 5px;
`;

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<StoryProps> = (args) => <Container {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: (
    <>
      <Row>
        <Column large={2}>
          <Border>one</Border>
        </Column>
        <Column>
          <Border>two</Border>
        </Column>
        <Column>
          <Border>three</Border>
        </Column>
        <Column>
          <Border>
            <div>en</div>
            <div>en</div>
            <div>en</div>
            <div>en</div>
          </Border>
        </Column>
        <Column medium={2} large={12}>
          <Border>five</Border>
        </Column>
      </Row>
      <Row>
        <Column small={2}>
          <Border>en</Border>
        </Column>
      </Row>
      <Row gutters>
        <Column>
          <Border>en</Border>
        </Column>
        <Column>
          <Border>en</Border>
        </Column>
      </Row>
    </>
  ),
};

export const All = () => {
  const rows = [];
  for (let i = 1; i <= 12; i++) {
    rows.push(i);
  }
  return (
    <Container>
      {rows.map((i) => {
        return (
          <Row key={i}>
            {rows
              .filter((j) => j <= i)
              .map((j) => {
                return (
                  <Column key={j}>
                    <Border>{j}</Border>
                  </Column>
                );
              })}
          </Row>
        );
      })}
    </Container>
  );
};

export const AllWithSize = () => {
  const rows = [];
  for (let i = 1; i <= 12; i++) {
    rows.push(i);
  }
  return (
    <Container>
      {rows.map((i) => (
        <Row key={i}>
          <Column small={i}>
            <Border>{i}</Border>
          </Column>
        </Row>
      ))}
    </Container>
  );
};

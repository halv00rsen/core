import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button>Main button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('accepts color', () => {
  const tree = renderer
    .create(<Button backgroundColor={'green'}>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with onClick function', () => {
  const tree = renderer
    .create(<Button onClick={console.log}>Click</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import { Input, InputProps } from './Input';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  color: 'gray',
  labelText: 'some text',
};

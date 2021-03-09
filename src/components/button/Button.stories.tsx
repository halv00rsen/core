import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Main button',
};

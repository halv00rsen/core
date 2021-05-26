import React from 'react';
import { Alert, AlertProps } from './Alert';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <Alert {...args}>Alert Box</Alert>
);

export const WithClose = Template.bind({});
WithClose.args = {
  onClose: console.log,
  type: 'INFO',
};

export const WithoutClose = Template.bind({});
WithoutClose.args = {
  type: 'INFO',
  onClose: undefined,
};

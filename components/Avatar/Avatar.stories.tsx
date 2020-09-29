import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Avatar from "../Avatar";

export default {
    title: 'Example/Avatar',
    component: Avatar,
  };

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "default"
}


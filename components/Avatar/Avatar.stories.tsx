import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Avatar from "../Avatar";
import AvatarModel from "../../models/avatarModel"


export default {
    title: 'Example/Avatar',
    component: Avatar,
  };

const Template: Story<AvatarModel> = (args) => <Avatar {...args} />

export const Primary = Template.bind({});
Primary.args = {
    image: "https://api.adorable.io/avatars/40/abott@adorable.png",
    size: "50px",
    onClick: ()=>console.log("oi"),
}


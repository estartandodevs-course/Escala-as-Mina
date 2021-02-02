import React from "react";

import { Button } from "../components/Button";

const Template = (args) => <Button {...args}>Button</Button>;

// primary, secondary, disabled, search, active, alert
export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  variation: "primary",
  type: "solid",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "large",
  variation: "secondary",
  type: "solid",
};

export const Alert = Template.bind({});
Alert.args = {
  size: "large",
  variation: "alert",
  type: "solid",
};

const MetaData = {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "normal", "large"],
      },
    },
    variation: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "disable",
          "search",
          "active",
          "alert",
        ],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["solid", "outlined", "icon"],
      },
    },
  },
};

export default MetaData;

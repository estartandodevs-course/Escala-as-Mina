import React from "react";

import { Button } from "../components/Button";

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  variation: "secondary",
  type: "solid",
};

export default {
  title: "Button",
  component: Button,
};

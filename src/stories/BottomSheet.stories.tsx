import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BottomSheet } from "./BottomSheet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/BottomSheet",
	component: BottomSheet,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BottomSheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomSheet> = (args) => (
	<BottomSheet {...args} />
);

export const HandleFalse = Template.bind({});
HandleFalse.args = {
	handle: false,
};

export const HandleTrue = Template.bind({});
HandleTrue.args = {
	handle: true,
};

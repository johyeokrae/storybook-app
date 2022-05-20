import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MotionSheet } from "./MotionSheet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/MotionSheet",
	component: MotionSheet,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
		color: { control: "color" },
	},
} as ComponentMeta<typeof MotionSheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MotionSheet> = (args) => (
	<MotionSheet {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "MotionSheet",
};

export const HandleFalse = Template.bind({});
HandleFalse.args = {
	handle: "none",
};

export const HandleTrue = Template.bind({});
HandleTrue.args = {
	handle: "block",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BottomSheet2 } from "./BottomSheet2";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/BottomSheet2",
	component: BottomSheet2,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BottomSheet2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomSheet2> = (args) => (
	<BottomSheet2 {...args} />
);

export const HandleFalse = Template.bind({});
HandleFalse.args = {
	handle: false,
};

export const HandleTrue = Template.bind({});
HandleTrue.args = {
	handle: true,
};

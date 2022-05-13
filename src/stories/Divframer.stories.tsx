import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Divframer } from "./Divframer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/Divframer",
	component: Divframer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
		color: { control: "color" },
	},
} as ComponentMeta<typeof Divframer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divframer> = (args) => (
	<Divframer {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "Divframer",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Divframer",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Divframer",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Divframer",
};

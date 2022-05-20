import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DivBottomsheet } from "./DivBottomsheet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/DivBottomsheet",
	component: DivBottomsheet,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
		color: { control: "color" },
	},
} as ComponentMeta<typeof DivBottomsheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DivBottomsheet> = (args) => (
	<DivBottomsheet {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "DivBottomsheet",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "DivBottomsheet",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "DivBottomsheet",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "DivBottomsheet",
};

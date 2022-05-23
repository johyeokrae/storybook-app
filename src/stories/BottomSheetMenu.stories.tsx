import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BottomSheetMenu } from "./BottomSheetMenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Component/BottomSheetMenu",
	component: BottomSheetMenu,
} as ComponentMeta<typeof BottomSheetMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomSheetMenu> = (args) => (
	<BottomSheetMenu {...args} />
);

export const HandleFalse = Template.bind({});
HandleFalse.args = {
	handle: false,
	Image1: "./images/1.png",
	Image1Text: "일정",
	Image2: "./images/2.png",
	Image2Text: "할일",
	Image3: "./images/3.png",
	Image3Text: "구간",
	Image4: "./images/4.png",
	Image4Text: "습관",
	Image5: "./images/5.png",
	Image5Text: "스티커",
	Image6: "./images/6.png",
	Image6Text: "날짜배경",
	Image7: "./images/7.png",
	Image7Text: "이날의 이벤트",
	Image8: "",
	Image8Text: "",
};

export const HandleTrue = Template.bind({});
HandleTrue.args = {
	handle: true,
	Image1: "./images/1.png",
	Image1Text: "일정",
	Image2: "./images/2.png",
	Image2Text: "할일",
	Image3: "./images/3.png",
	Image3Text: "구간",
	Image4: "./images/4.png",
	Image4Text: "습관",
	Image5: "./images/5.png",
	Image5Text: "스티커",
	Image6: "./images/6.png",
	Image6Text: "날짜배경",
	Image7: "./images/7.png",
	Image7Text: "이날의 이벤트",
	Image8: "",
	Image8Text: "",
};

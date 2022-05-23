import React, { useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Dim = styled(motion.div)`
	position: relative;
	color: white;
	background-color: #000;
	width: 100vw;
	height: 100vh;
`;

const BottomUpSheetContainer = styled(motion.div)`
position: absolute,
overflow: hidden,
left: 0,
top: 0,
width: 100vw,
height: 100vh,
`;

const BottomUpSheet = styled(motion.div)`
	position: absolute;
	bottom: -20px;
	color: white;
	background-color: #ffffff;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	box-shadow: 0px 5px 16px #000;
	width: 100vw;
	max-width: 700px;
	height: 1000px;
	text-align: center;
	margin: 0 auto;
	left: 0;
	right: 0;
`;
const Bar = styled(motion.div)`
	position: relative;
	top: 20px;
	margin: 0 auto;
	width: 100px;
	height: 5px;
	border-radius: 5px;
	background-color: #bdbdbd;
	z-index: 9999;
`;

const bottomsheetshow = {
	start: {
		y: 1000,
	},

	end: {
		y: 500,
		transition: {
			type: "tween",
			bounce: 0.8,
			duration: 0.5,
			delayChildren: 2, // 자식요소 애니메이션 딜레이 설정
			staggerChildren: 0.5, // 자식요소 순차적 딜레이 설정
		},
	},
};
const bottomsheethide = {
	start: {
		y: 500,
	},

	end: {
		y: 1000,
		transition: {
			type: "tween",
			bounce: 0.8,
			duration: 0.5,
			delayChildren: 2, // 자식요소 애니메이션 딜레이 설정
			staggerChildren: 0.5, // 자식요소 순차적 딜레이 설정
		},
	},
};

const dimshow = {
	start: {
		opacity: 0,
	},

	end: {
		opacity: 0.5,
		transition: {
			type: "tween",
			bounce: 0.8,
			duration: 0.5,
			delayChildren: 2, // 자식요소 애니메이션 딜레이 설정
			staggerChildren: 0.5, // 자식요소 순차적 딜레이 설정
		},
	},
};
const dimhide = {
	start: {
		opacity: 0.5,
	},

	end: {
		opacity: 0,
		transition: {
			type: "tween",
			bounce: 0.8,
			duration: 0.5,
			delayChildren: 2, // 자식요소 애니메이션 딜레이 설정
			staggerChildren: 0.5, // 자식요소 순차적 딜레이 설정
		},
	},
};

interface BottomSheet2Props {
	handle?: boolean;
	onClick?: () => void;
}

export const BottomSheet2 = ({
	handle = true,
	...props
}: BottomSheet2Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Dim
				id={"dim"}
				as={motion.div}
				variants={isOpen ? dimhide : dimshow}
				initial="start"
				animate="end"
				onClick={() => {
					console.log(isOpen);
					setIsOpen(!isOpen);
				}}
			></Dim>
			<div
				style={{
					position: "absolute",
					overflow: "hidden",
					left: 0,
					top: 0,
					width: "100vw",
					height: "100vh",
				}}
				onClick={() => {
					setIsOpen(true);
				}}
			>
				<BottomUpSheet
					as={motion.div}
					variants={isOpen ? bottomsheethide : bottomsheetshow}
					initial="start"
					animate="end"
				>
					{handle ? <Bar as={motion.div}></Bar> : ""}
				</BottomUpSheet>
			</div>
		</>
	);
};

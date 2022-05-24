import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Dim = styled(motion.div)`
	position: relative;
	color: white;
	background-color: #000;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
const BottomUpSheet = styled(motion.div)`
	position: absolute;
	bottom: 0;
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

const Container = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	margin: 10px;
	margin-top: 70px;
`;
const ItemGroup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	margin: 10px;
	width: 100px;
	height: 75px;
	flex: 1 1 40%;
`;
const Item = styled(motion.div)`
	width: 100px;
	height: 50px;
`;
const ItemText = styled(motion.div)`
	--framer-font-family: "Spoqa Han Sans Neo Bold", sans-serif;
	font-style: normal;
	font-weight: 400;
	color: #202020;
	font-size: 14px;
	letter-spacing: -0.2px;
	line-height: 1.7em;
	text-alignment: center;
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

interface BottomSheetMenuProps {
	handle?: boolean;
	onClick?: () => void;
	Image1?: string;
	Image1Text?: string;
	Image2?: string;
	Image2Text?: string;
	Image3?: string;
	Image3Text?: string;
	Image4?: string;
	Image4Text?: string;
	Image5?: string;
	Image5Text?: string;
	Image6?: string;
	Image6Text?: string;
	Image7?: string;
	Image7Text?: string;
	Image8?: string;
	Image8Text?: string;
}

export const BottomSheetMenu = ({
	handle = true,
	...props
}: BottomSheetMenuProps) => {
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
			>
				<BottomUpSheet
					as={motion.div}
					variants={isOpen ? bottomsheethide : bottomsheetshow}
					initial="start"
					animate="end"
				>
					{handle ? <Bar as={motion.div}></Bar> : ""}

					<Container>
						<ItemGroup>
							<Item>
								<img
									src={props.Image1}
									alt="Image1"
									style={{ width: "50px", height: "50px" }}
								/>
							</Item>
							<ItemText>{props.Image1Text}</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image2} alt="Image2" />
							</Item>
							<ItemText>할일</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image3} alt="Image3" />
							</Item>
							<ItemText>구간</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image4} alt="Image4" />
							</Item>
							<ItemText>습관</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image5} alt="Image5" />
							</Item>
							<ItemText>스티커</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image6} alt="Image6" />
							</Item>
							<ItemText>날짜배경</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								<img src={props.Image7} alt="Image7" />
							</Item>
							<ItemText>이날의 이벤트</ItemText>
						</ItemGroup>
						<ItemGroup>
							<Item>
								{props.Image8 === ""
									? ""
									: `<img src={props.Image8} alt="Image8" />`}
							</Item>
							<ItemText>{props.Image8Text}</ItemText>
						</ItemGroup>
					</Container>
				</BottomUpSheet>
			</Dim>
		</>
	);
};

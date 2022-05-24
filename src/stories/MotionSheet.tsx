import React from "react";
import { motion } from "framer-motion";
// import styled from "styled-components";

interface MotionSheetProps {
	primary?: boolean;

	backgroundColor?: string;

	color?: string;

	drag?: boolean | "x" | "y";

	size?: "small" | "medium" | "large";

	label: string;

	handle: string;
	onClick?: () => void;
}

export const MotionSheet = ({
	primary = false,
	size = "medium",
	backgroundColor,
	color,
	drag = false,
	label,
	handle = "none",
	...props
}: MotionSheetProps) => {
	return (
		<>
			<motion.div
				initial={{
					opacity: 0,
					color: "white",
					backgroundColor: "#000",
					width: "100vw",
					height: "100vh",
					display: "none",
					overflow: "hidden",
				}}
				animate={{ opacity: 0.5, display: "block" }}
				transition={
					{
						// type: "spring",
						// stiffness: 100,
						// default: { duration: 2 },
					}
				}
			>
				<motion.div
					initial={{
						y: 1000,
						backgroundColor: "#fff",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
						width: "300px",
						height: "1000px",
						display: "none",
						margin: "0 auto",
					}}
					animate={{ y: 200, display: "block" }}
					transition={{
						// type: "spring",
						// stiffness: 100,
						default: { duration: 2 },
					}}
				>
					<motion.div
						initial={{
							position: "relative",
							color: "black",
							top: "20px",
							backgroundColor: "#bbb",
							width: "100px",
							height: "5px",
							margin: "0 auto",
							display: `${handle}`,
						}}
						style={{ backgroundColor }}
						{...props}
					></motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

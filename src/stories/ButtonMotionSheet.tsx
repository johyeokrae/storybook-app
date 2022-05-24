import React, { useState } from "react";
import { motion } from "framer-motion";
// import styled from "styled-components";

interface ButtonMotionSheetProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * What color to use
	 */
	color?: string;
	/**
	 * What color to use
	 */
	drag?: boolean | "x" | "y";
	/**
	 * How large should the divframer be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Divframer contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

export const ButtonMotionSheet = ({
	primary = false,
	size = "medium",
	backgroundColor,
	color,
	drag = false,
	label,
	...props
}: ButtonMotionSheetProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const variantsDim = {
		open: { opacity: 0.5, display: "block" },
		closed: { opacity: 0, display: "none" },
	};
	const variantsBottomsheet = {
		open: { y: 200, display: "block" },
		closed: { y: 1000, display: "none" },
	};

	return (
		<>
			<button
				onClick={() => {
					console.log(isOpen);
					setIsOpen(!isOpen);
				}}
			>
				Button
			</button>
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
				animate={isOpen ? "open" : "closed"}
				transition={{
					ease: "easeInOut",
					duration: 1,
				}}
				variants={variantsDim}
			>
				<motion.div
					initial={{
						y: 1000,
						backgroundColor: "#fff",
						width: "300px",
						height: "1000px",
						display: "none",
						margin: "0 auto",
					}}
					animate={isOpen ? "open" : "closed"}
					transition={{
						ease: "easeInOut",
						duration: 1,
					}}
					variants={variantsBottomsheet}
				>
					<motion.div
						initial={{
							position: "relative",
							top: "20px",
							backgroundColor: "#bbb",
							width: "100px",
							height: "5px",
							margin: "0 auto",
						}}
					></motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

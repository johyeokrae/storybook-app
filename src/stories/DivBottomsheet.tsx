import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface DivBottomsheetProps {
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

/**
 * Primary UI component for user interaction
 */
export const DivBottomsheet = ({
	primary = false,
	size = "medium",
	backgroundColor,
	color,
	drag = false,
	label,
	...props
}: DivBottomsheetProps) => {
	const Dimmer = styled(motion.div)`
		background: #000;
		opacity: 0.5;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 9999;
	`;
	const Bottomsheet = styled(motion.div)`
		background: #fff;
		position: fixed;
		bottom: 0;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		left: 10%;
		width: 80%;
		height: 50%;
		display: none;
		z-index: 9999;
	`;
	const Bar = styled(motion.div)`
		position: relative;
		top: 10%;
		margin: 0 auto;
		width: 10%;
		height: 5px;
		background-color: #bbb;
		z-index: 9999;
	`;
	const bottomsheetshow = [{ bottom: "-1000px" }, { bottom: 0 }];
	const bottomsheethide = [{ bottom: 0 }, { bottom: "-1000px" }];

	const bottomsheet_time = {
		duration: 2000,
		iterations: 1,
	};

	const dimshow = [{ opacity: 0 }, { opacity: 0.5 }];
	const dimhide = [{ opacity: 0.5 }, { opacity: 0 }];

	const dim_time = {
		duration: 2000,
		iterations: 1,
	};
	return (
		<>
			<button
				onClick={() => {
					const btsheet = document.getElementById(
						"bottomsheet"
					) as HTMLElement;
					btsheet.animate(bottomsheetshow, bottomsheet_time);
					btsheet.style.display = "block";

					const dim = document.getElementById("dim") as HTMLElement;
					dim.animate(dimshow, dim_time);
					dim.style.display = "block";
				}}
			>
				click
			</button>
			<Dimmer
				as={motion.div}
				id={"dim"}
				onClick={() => {
					const dim = document.getElementById("dim") as HTMLElement;
					dim.animate(dimhide, dim_time);

					const btsheet = document.getElementById(
						"bottomsheet"
					) as HTMLElement;
					btsheet.animate(bottomsheethide, bottomsheet_time);
				}}
			></Dimmer>
			<Bottomsheet
				as={motion.div}
				id={"bottomsheet"}
				style={{}}
				animate={{
					transitionEnd: {
						display: "none",
					},
				}}
			>
				<Bar as={motion.div}></Bar>
			</Bottomsheet>
		</>
	);
};

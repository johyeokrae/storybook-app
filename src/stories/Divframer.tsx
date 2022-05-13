import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./divframer.css";

interface DivframerProps {
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
export const Divframer = ({
	primary = false,
	size = "medium",
	backgroundColor,
	color,
	drag = false,
	label,
	...props
}: DivframerProps) => {
	const mode = primary
		? "storybook-divframer--primary"
		: "storybook-divframer--secondary";
	return (
		<motion.div
			drag={drag}
			animate={{ rotate: 360 }}
			transition={{ duration: 2 }}
			className={[
				"storybook-divframer",
				`storybook-divframer--${size}`,
				mode,
			].join(" ")}
			style={{ backgroundColor, color }}
			{...props}
		>
			{label}
		</motion.div>
	);
};

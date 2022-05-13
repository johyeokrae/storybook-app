import React from "react";
import "./card.css";

interface CardProps {
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
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
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
export const Card = ({
	primary = false,
	size = "medium",
	backgroundColor,
	color,
	label,
	...props
}: CardProps) => {
	const mode = primary
		? "storybook-card--primary"
		: "storybook-card--secondary";
	return (
		<div
			className={["storybook-card", `storybook-card--${size}`, mode].join(
				" "
			)}
			style={{ backgroundColor, color }}
			{...props}
		>
			{label}
		</div>
	);
};

import React from "react";
import PropTypes from "prop-types";

export const Scrollbar = ({
	heading,
	content,
	direction,
}) => {
	let directionClass = "";

	if (direction == "vertical") {
		directionClass = "";
	} else if (direction == "horizontal") {
		directionClass = "made-c-scrollbar--horizontal";
	}

	return (
		<div className={`made-c-scrollbar made-s-scrollbar ${directionClass}`}  tabindex="0">
			<h2 class="made-u-margin-bottom-6-x">{heading}</h2>
			<p>{content}</p>
		</div>
	);
};

Scrollbar.propTypes = {
	heading: PropTypes.string,
	content: PropTypes.string,
	direction: PropTypes.oneOf(["vertical", "horizontal"]),
};

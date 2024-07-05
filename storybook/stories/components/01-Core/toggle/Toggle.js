import React from "react";
import { useRef } from "react";
const { useState } = React;
import PropTypes from "prop-types";

export function Toggle({ name, isChecked, label, isDisabled, size }) {
	const btnRef = useRef();
	const [checked, setChecked] = useState(false);
	const toggleChecked = () => setChecked(value => !value);

	const handleClick = () => {
		btnRef.current.focus();
	  };

	return (
		<div className="made-c-form__element">
			<span className="made-c-form__label" id={name}>
				{label}
			</span>
			<label  className={
				size == "small"
					? "made-c-toggle made-c-toggle--small"
					: "made-c-toggle"
			}>
				<input
					type="checkbox"
					className="made-c-toggle__input"
					aria-labelledby={name}
					disabled={isDisabled}
					onChange={toggleChecked}
					checked={isChecked ? isChecked:checked}
					onClick={handleClick}
					ref={btnRef}
				/>
				<span className={
				size == "small"
					? "made-c-toggle__slider made-c-toggle__slider--small"
					: "made-c-toggle__slider"
			}>

			</span>
			</label>
		</div>
	);
}

Toggle.propTypes = {
	name: PropTypes.string,
	size: PropTypes.oneOf(["default", "small"]),
	isDisabled: PropTypes.bool,
	isChecked: PropTypes.bool,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
};

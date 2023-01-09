import React from "react";
import PropTypes from "prop-types";

export function Toggle({ name, isChecked, label, isDisabled }) {
	return (
		<div className="made-c-form__element">
			<span className="made-c-form__label" id={name}>
				{label}
			</span>
			<label className="made-c-toggle">
				<input
					type="checkbox"
					className="made-c-toggle__input"
					aria-labelledby={name}
					disabled={isDisabled}
					checked={isChecked}
					onClick={true}
				/>
				<span className="made-c-toggle__slider"></span>
			</label>
		</div>
	);
}

Toggle.propTypes = {
	name: PropTypes.string,
	isChecked: PropTypes.bool,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
};

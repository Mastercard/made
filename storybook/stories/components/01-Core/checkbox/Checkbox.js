import React from "react";
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const Checkbox = ({
	label,
	state,
	isDisabled,
	isValid,
	validationText,
}) => {
	let uniqueId = uniqueInteger(1000); //generate unique id between 0 and 1000
	return (
		<div className="made-c-form__element">
			<input
				className={
					state == "indeterminate"
						? "made-c-checkbox made-c-checkbox--indeterminate"
						: "made-c-checkbox"
				}
				name={`checkbox-${uniqueId}`}
				type="checkbox"
				id={`checkbox-group-${uniqueId}`}
				value="1"
				checked={state == "checked" ? "checked" : ""}
				disabled={isDisabled}
				onClick={true}
			/>
			<label
				className={
					!isValid
						? "made-c-checkbox__label made-c-radio__label--error made-u-margin-bottom-3-x"
						: "made-c-checkbox__label"
				}
				for={`checkbox-group-${uniqueId}`}
			>
				{label}
			</label>
			{!isValid && !isDisabled && (
				<div className="made-c-form__validation--error made-u-margin-bottom-3-x">
					{validationText}
				</div>
			)}
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
	state: PropTypes.oneOf(["unchecked", "checked", "indeterminate"]),
	isDisabled: PropTypes.bool,
	isValid: PropTypes.bool,
	validationText: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
const { useState } = React;
import { uniqueInteger } from "../../../assets/js/global";

export const Checkbox = ({
	label,
	state,
	isDisabled,
	isValid,
	isBranded,
	validationText,
}) => {
	const btnRef = useRef();
	const [checked, setChecked] = useState(false);
	const toggleChecked = () => setChecked(value => !value);

	const handleClick = () => {
		btnRef.current.focus();
	};

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
				checked={checked}
				onChange={toggleChecked}
				onClick={handleClick}
				disabled={isDisabled}
				ref={btnRef}
			/>
			<label
				className={`made-c-checkbox__label ${!isValid ? `made-c-checkbox__label made-c-checkbox__label--error made-u-margin-bottom-3-x` : ""
					}
		  ${!isBranded ? `made-c-checkbox__label--neutral` : ""}`
				}
				for={`checkbox-group-${uniqueId}`}
			>
				{label}
			</label>
			{!isValid && !isDisabled && (
				<div className="made-c-form__validation--error made-u-margin-bottom-3-x">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-u-margin-right-1-x">
						<path fillRule="evenodd" clipRule="evenodd" d="M4.495 1.87c.669-1.16 2.341-1.16 3.01 0l4.26 7.383c.668 1.159-.168 2.606-1.505 2.606H1.74c-1.337 0-2.173-1.447-1.505-2.606l4.26-7.384zm2.13 3.04a.543.543 0 10-1.086 0v2.484a.543.543 0 101.087 0V4.91zm-.542 3.927c-.3 0-.544.244-.544.544v.005c0 .3.244.543.544.543h.004c.3 0 .543-.244.543-.543V9.38c0-.3-.243-.544-.543-.544h-.004z" fill="var(--made-color-feedback-background-error)" />
					</svg>
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
	isBranded: PropTypes.bool,
	validationText: PropTypes.string,
};

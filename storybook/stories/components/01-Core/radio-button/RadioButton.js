import React from "react";
import { useRef } from "react";
const { useState } = React;
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const RadioButton = ({
	isChecked,
	label,
	isDisabled,
	isValid,
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
				className="made-c-radio"
				name={`radio-${uniqueId}`}
				type="radio"
				id={`radio-group-${uniqueId}`}
				value="1"
				disabled={isDisabled}
				checked={isChecked ? isChecked:checked}
				onChange={toggleChecked}
				onClick={handleClick}
				ref={btnRef}
			/>
			<label
				className={
					!isValid
						? "made-c-radio__label made-c-radio__label--error"
						: "made-c-radio__label"
				}
				for={`radio-group-${uniqueId}`}
			>
				{label}
			</label>
			{!isValid && !isDisabled && (
				<div class="made-c-form__validation--error">
					{validationText}
				</div>
			)}
		</div>
	);
};

RadioButton.propTypes = {
	isChecked: PropTypes.bool,
	label: PropTypes.string,
	isDisabled: PropTypes.bool,
};

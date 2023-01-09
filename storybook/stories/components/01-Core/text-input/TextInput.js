import React, { useState } from "react";
import PropTypes from "prop-types";

export const TextInput = ({
	name,
	label,
	value,
	placeholder,
	helperText,
	validationText,
	state,
	passwordStrength,
}) => {
	let isDisabled,
		isValidationState,
		isPassword = false;
	let validationClass = "";
	let type = "text";

	const [textValue, setTextValue] = useState(value);
	const handleInput = (e) => {
		setTextValue(e.target.value);
	};

	if (state == "disabled") {
		isDisabled = true;
	} else if (state == "error" || state == "success") {
		validationClass = state;
		isValidationState = true;
	} else if (state == "password") {
		isPassword = true;
		type = "password";
		if (passwordStrength == "default") {
			value = "";
		}
	}
	return (
		<div class="made-c-form__element">
			<label
				for={name}
				className={
					isValidationState
						? `made-c-form__label made-c-form__label--${validationClass}`
						: "made-c-form__label"
				}
			>
				{label}
			</label>
			<div className="made-c-text-input__wrapper">
				{state == "error" && (
					<svg
						class="made-c-text-input__icon"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						className="made-c-text-area__icon"
					>
						<title>information icon</title>
						<g fill="currentColor" fill-rule="evenodd">
							<circle
								fill="var(--made-color-feedback-background-error)"
								cx="8"
								cy="8"
								r="8"
							/>
							<path
								d="M8.497 13H7.388V6.182h1.109V13zM7.942 3c.109 0 .211.02.307.058a.72.72 0 01.248.162.82.82 0 01.166.244.723.723 0 01.063.3c0 .11-.021.21-.063.302a.748.748 0 01-.414.396.818.818 0 01-.307.057.762.762 0 01-.554-.216.723.723 0 01-.221-.54A.756.756 0 017.943 3z"
								fill="var(--made-color-feedback-text-on-error)"
							/>
						</g>
					</svg>
				)}
				{state == "success" && (
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						class="made-c-text-area__icon"
					>
						<title>Success</title>
						<g fill="none" fill-rule="evenodd">
							<path
								d="M8 0a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8z"
								fill="var(--made-color-feedback-background-success)"
							/>
							<path
								d="M6.178 10.265l-2.37-2.37-.808.8 3.178 3.179L13 5.052l-.802-.802z"
								fill="var(--made-color-feedback-text-on-success)"
							/>
						</g>
					</svg>
				)}
				<input
					type={type}
					id={name}
					name="default"
					onChange={handleInput}
					value={textValue}
					className={
						isValidationState
							? `made-c-text-input made-c-text-input--${validationClass}`
							: "made-c-text-input"
					}
					placeholder={placeholder}
					disabled={isDisabled}
				/>
			</div>
			{isPassword && (
				<div class="made-c-meter">
					<div
						class={`made-c-meter__level made-c-meter__level--${passwordStrength}`}
					></div>
				</div>
			)}
			{!isValidationState && !isPassword && (
				<div className="made-c-form__hint">{helperText}</div>
			)}
			{isPassword && passwordStrength != "default" && (
				<div className="made-c-form__hint">
					Password strength:{" "}
					<strong>
						{passwordStrength.charAt(0).toUpperCase() +
							passwordStrength.slice(1)}
					</strong>
				</div>
			)}
			{isValidationState && (
				<div className={`made-c-form__validation--${validationClass}`}>
					{validationText}
				</div>
			)}
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	helperText: PropTypes.string,
	validationText: PropTypes.string,
	state: PropTypes.oneOf(["default", "disabled", "error", "success"]),
};

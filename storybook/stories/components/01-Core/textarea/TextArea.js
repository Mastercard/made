import React from "react";
import PropTypes from "prop-types";

export const TextArea = ({
	name,
	label,
	placeholder,
	helperText,
	validationText,
	state,
}) => {
	let isDisabled,
		isValidationState,
		isPassword = false;
	let validationClass = "";
	let type = "text";

	if (state == "disabled") {
		isDisabled = true;
	} else if (state == "error" || state == "success") {
		validationClass = state;
		isValidationState = true;
	}

	return (
		<div className="made-c-form__element">
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
			<div className="made-c-text-area__wrapper">
				{state == "error" && (
					<svg
						className="made-c-text-area__icon"
						width="16"
						height="16"
						viewBox="0 0 16 16"
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
				<textarea
					cols="50"
					rows="4"
					id={name}
					placeholder={placeholder}
					disabled={isDisabled}
					className={
						isValidationState
							? `made-c-text-area made-c-text-area--${validationClass}`
							: "made-c-text-area"
					}
				></textarea>
			</div>
			{!isValidationState && (
				<div className="made-c-form__hint">{helperText}</div>
			)}
			{isValidationState && (
				<div className={`made-c-form__validation--${validationClass}`}>
					{validationText}
				</div>
			)}
		</div>
	);
};

TextArea.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	helperText: PropTypes.string,
	validationText: PropTypes.string,
	state: PropTypes.oneOf(["default", "disabled", "error", "success"]),
};

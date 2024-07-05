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
					{state == "error" && (
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-u-margin-right-1-x">
							<path fillRule="evenodd" clipRule="evenodd" d="M4.495 1.87c.669-1.16 2.341-1.16 3.01 0l4.26 7.383c.668 1.159-.168 2.606-1.505 2.606H1.74c-1.337 0-2.173-1.447-1.505-2.606l4.26-7.384zm2.13 3.04a.543.543 0 10-1.086 0v2.484a.543.543 0 101.087 0V4.91zm-.542 3.927c-.3 0-.544.244-.544.544v.005c0 .3.244.543.544.543h.004c.3 0 .543-.244.543-.543V9.38c0-.3-.243-.544-.543-.544h-.004z" fill="var(--made-color-feedback-background-error)" />
						</svg>
					)}
					{state == "success" && (
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-u-margin-right-1-x">
							<g clip-path="url(#clip0_1024_34402)">
								<path fillRule="evenodd" clipRule="evenodd" d="M6 0a6 6 0 100 12A6 6 0 006 0zm2.316 4.72a.577.577 0 00-.94-.67L5.466 6.725l-.903-.903a.577.577 0 10-.816.816L5.13 8.023a.577.577 0 00.877-.072L8.316 4.72z" fill="var(--made-color-feedback-background-success)" />
							</g>
							<defs>
								<clipPath id="clip0_1024_34402">
									<path fill="var(--made-color-feedback-text-on-success)" d="M0 0h12v12H0z" />
								</clipPath>
							</defs>
						</svg>
					)}
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

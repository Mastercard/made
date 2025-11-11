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
	icon,
	iconPosition
}) => {
	let isDisabled,
		isValidationState,
		isPassword,
		isIcon = false;
	let validationClass = "";
	let type = "text";

	const [textValue, setTextValue] = useState(value);
	const handleInput = (e) => {
		setTextValue(e.target.value);
	};

	if (icon == true) {
		isIcon = true;
	}

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
				<input
					type={type}
					id={name}
					name="default"
					onChange={handleInput}
					value={textValue}
					className={`made-c-text-input ${isValidationState ? `made-c-text-input made-c-text-input--${validationClass}` : ""
						}
					  ${isIcon && iconPosition == "left" ? `made-c-text-input--icon` : ""}`
					}
					placeholder={placeholder}
					disabled={isDisabled}
				/>
				{isIcon && iconPosition == "left" && (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
						class={`made-c-form__icon made-c-form__icon--${iconPosition}`}>
						<path fillRule="evenodd" clipRule="evenodd" d="M1.25 5.625C1.25 4.24429 2.36929 3.125 3.75 3.125H16.25C17.6307 3.125 18.75 4.24429 18.75 5.625V14.375C18.75 15.7557 17.6307 16.875 16.25 16.875H3.75C2.36929 16.875 1.25 15.7557 1.25 14.375V5.625ZM2.5 5.625V5.82726C2.5 6.26133 2.72519 6.66433 3.09488 6.89183L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L16.9051 6.89183C17.2748 6.66433 17.5 6.26134 17.5 5.82726V5.625C17.5 4.93464 16.9404 4.375 16.25 4.375H3.75C3.05964 4.375 2.5 4.93464 2.5 5.625ZM17.5 7.99348L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L2.5 7.99348V14.375C2.5 15.0654 3.05964 15.625 3.75 15.625H16.25C16.9404 15.625 17.5 15.0654 17.5 14.375V7.99348Z" fill="currentColor" />
					</svg>
				)}
				{isIcon && iconPosition == "right" && (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
						class={`made-c-form__icon made-c-form__icon--${iconPosition}`}>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.625C6.20304 3.625 3.125 6.70304 3.125 10.5C3.125 14.297 6.20304 17.375 10 17.375C13.797 17.375 16.875 14.297 16.875 10.5C16.875 6.70304 13.797 3.625 10 3.625ZM1.875 10.5C1.875 6.01269 5.51269 2.375 10 2.375C14.4873 2.375 18.125 6.01269 18.125 10.5C18.125 14.9873 14.4873 18.625 10 18.625C5.51269 18.625 1.875 14.9873 1.875 10.5ZM9.375 7.375C9.375 7.02982 9.65482 6.75 10 6.75H10.0062C10.3514 6.75 10.6312 7.02982 10.6312 7.375V7.38125C10.6312 7.72643 10.3514 8.00625 10.0062 8.00625H10C9.65482 8.00625 9.375 7.72643 9.375 7.38125V7.375ZM9.13007 9.2987C10.0853 8.8211 11.1608 9.68384 10.9018 10.7199L10.3109 13.0833L10.3455 13.066C10.6542 12.9116 11.0296 13.0367 11.184 13.3455C11.3384 13.6542 11.2133 14.0296 10.9045 14.184L10.8699 14.2013C9.91475 14.6789 8.83923 13.8162 9.09824 12.7801L9.68908 10.4167L9.65451 10.434C9.34577 10.5884 8.97035 10.4632 8.81598 10.1545C8.66161 9.84577 8.78675 9.47035 9.09549 9.31598L9.13007 9.2987Z" fill="currentColor" />
					</svg>
				)}
				{isPassword && (
					<button class="made-c-button--reset" width="24" height="24">
						<svg class="made-c-form__icon made-c-form__icon--right" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.002 5.25a9.755 9.755 0 00-9.254 6.67.261.261 0 000 .165 9.754 9.754 0 0018.505-.005.262.262 0 000-.165 9.755 9.755 0 00-9.252-6.665zM1.323 11.447C2.812 6.976 7.03 3.75 12.002 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113C21.19 17.024 16.972 20.25 12 20.25c-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM12.001 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" fill="currentColor" />
						</svg>
					</button>
				)}
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

TextInput.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	helperText: PropTypes.string,
	validationText: PropTypes.string,
	icon: PropTypes.boolean,
	state: PropTypes.oneOf(["default", "disabled", "error", "success"]),
};

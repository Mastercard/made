import React from "react";
import PropTypes from "prop-types";

export const Select = ({
    name,
    label,
    options,
    helperText,
    validationText,
    state,
}) => {
    let isDisabled,
        isValidationState = false;
    let validationClass = "";

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
            <div className="made-c-select__wrapper">
                <select
                    id={name}
                    className={
                        isValidationState
                            ? `made-c-select made-c-select--${validationClass}`
                            : "made-c-select"
                    }
                    disabled={isDisabled}
                >
                    {options != null && options.length > 0 ? (
                        options.map(function (option, index) {
                            return (
                                <option className="" value={`option-${index}`}>
                                    {option}
                                </option>
                            );
                        })
                    ) : (
                        <option className="" value="option-1">
                            Option 1
                        </option>
                    )}
                </select>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="made-c-select__arrow">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {isValidationState && (
                <div className={`made-c-form__validation--${validationClass}`}>
                    {state == "error" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="made-u-margin-right-1-x">
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
            {!isValidationState && (
                <div className="made-c-form__hint">{helperText}</div>
            )}
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.objectOf(PropTypes.string),
    helperText: PropTypes.string,
    validationText: PropTypes.string,
    state: PropTypes.oneOf(["default", "disabled", "error", "success"]),
};

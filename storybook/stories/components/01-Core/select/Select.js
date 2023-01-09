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
                <svg
                    width="12"
                    className="made-c-select__arrow"
                    height="6"
                    viewBox="0 0 12 6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>arrow</title>
                    <path
                        d="M6 6L0 0h12z"
                        fill={
                            isDisabled
                                ? "var(--made-color-action-text-disabled)"
                                : "currentColor"
                        }
                        fill-rule="evenodd"
                    />
                </svg>
                {state == "error" && (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="made-c-select__icon"
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
                        class="made-c-select__icon"
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
            </div>
            {isValidationState && (
                <div className={`made-c-form__validation--${validationClass}`}>
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
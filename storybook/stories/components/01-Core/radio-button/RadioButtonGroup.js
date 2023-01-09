import React from "react";
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const RadioButtonGroup = ({
    heading,
    options,
    isVertical,
    isValid,
    validationText,
}) => {
    let groupId = uniqueInteger(1000); //generate unique id between 0 and 1000
    let radioButtonGroupClass = "made-c-radio-group";
    if (!isVertical) {
        radioButtonGroupClass += " made-c-radio-group--horizontal";
        if (isValid) {
            radioButtonGroupClass += " made-u-margin-bottom-8-x";
        }
    }
    if (!isValid) {
        radioButtonGroupClass += " made-c-radio-group--error";
    }
    return (
        <fieldset className="made-c-form__fieldset">
            <legend for="default" class="made-c-form__label">
                {heading}
            </legend>
            <ul className={radioButtonGroupClass}>
                {options != null && options.length > 0 ? (
                    options.map(function (label, index) {
                        let uniqueId = uniqueInteger(1000); //generate unique id between 0 and 1000
                        return (
                            <li
                                className={
                                    isVertical
                                        ? "made-u-margin-right-3-x"
                                        : "made-u-margin-right-6-x"
                                }
                            >
                                <input
                                    className="made-c-radio"
                                    name={`radio-${groupId}`}
                                    type="radio"
                                    id={`radio-group-${uniqueId}`}
                                    value={index}
                                />
                                <label
                                    className="made-c-radio__label"
                                    for={`radio-group-${uniqueId}`}
                                >
                                    {label}
                                </label>
                            </li>
                        );
                    })
                ) : (
                    <li
                        className={
                            isVertical
                                ? "made-u-margin-right-3-x"
                                : "made-u-margin-right-6-x"
                        }
                    >
                        <input
                            className="made-c-radio"
                            name="radio-970"
                            type="radio"
                            id="radio-group-637"
                            value="0"
                        />
                        <label
                            className="made-c-radio__label"
                            for="radio-group-637"
                        >
                            Option 1
                        </label>
                    </li>
                )}
            </ul>
            {!isValid && (
                <div class="made-c-form__validation--error made-u-margin-top-2-x">
                    {validationText}
                </div>
            )}
        </fieldset>
    );
};

RadioButtonGroup.propTypes = {
    heading: PropTypes.string,
    options: PropTypes.objectOf(PropTypes.string),
    isVertical: PropTypes.bool,
    isValid: PropTypes.bool,
};
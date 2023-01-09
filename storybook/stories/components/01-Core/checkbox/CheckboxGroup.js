import React from "react";
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const CheckboxGroup = ({
    heading,
    options,
    isVertical,
    isValid,
    validationText,
}) => {
    let groupId = uniqueInteger(1000); //generate unique id between 0 and 1000
    let checkboxGroupClass = "made-c-checkbox-group";
    if (!isVertical) {
        checkboxGroupClass += " made-c-checkbox-group--horizontal";
    }
    if (!isValid) {
        checkboxGroupClass += " made-c-checkbox-group--error";
    }
    return (
        <fieldset className="made-c-form__fieldset">
            <legend
                for="default"
                className="made-c-form__label"
                id="id-group-label"
            >
                {heading}
            </legend>
            <div role="group" aria-labelledby="id-group-label">
                <ul className={checkboxGroupClass}>
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
                                        className="made-c-checkbox"
                                        name={`checkbox-${groupId}`}
                                        type="checkbox"
                                        id={`checkbox-group-${uniqueId}`}
                                        value={index}
                                    />
                                    <label
                                        className={
                                            isVertical ||
                                            (!isVertical && !isValid)
                                                ? "made-c-checkbox__label made-u-margin-bottom-3-x"
                                                : "made-c-checkbox__label"
                                        }
                                        for={`checkbox-group-${uniqueId}`}
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
                                className="made-c-checkbox"
                                name="checkbox-592"
                                type="checkbox"
                                id="checkbox-group-319"
                                value="0"
                            />
                            <label
                                className={
                                    isVertical || (!isVertical && !isValid)
                                        ? "made-c-checkbox__label made-u-margin-bottom-3-x"
                                        : "made-c-checkbox__label"
                                }
                                for={`checkbox-group-319`}
                            >
                                Option 1
                            </label>
                        </li>
                    )}
                </ul>
            </div>
            {!isValid && (
                <div class="made-c-form__validation--error made-u-margin-top-2-x">
                    {validationText}
                </div>
            )}
        </fieldset>
    );
};

CheckboxGroup.propTypes = {
    heading: PropTypes.string,
    options: PropTypes.objectOf(PropTypes.string),
    isVertical: PropTypes.bool,
    isValid: PropTypes.bool,
};
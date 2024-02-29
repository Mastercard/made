import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const RadioButtonGroup = ({
    heading,
    options,
    isVertical,
    isValid,
    validationText,
}) => {
    const itemEls = useRef(new Array())

    const handleClick = (index) => {
        itemEls.current[index.target.value].focus();
    };

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
                                    onClick={handleClick}
                                    ref={(element) => itemEls.current[index] = element}
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
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-u-margin-right-1-x">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.495 1.87c.669-1.16 2.341-1.16 3.01 0l4.26 7.383c.668 1.159-.168 2.606-1.505 2.606H1.74c-1.337 0-2.173-1.447-1.505-2.606l4.26-7.384zm2.13 3.04a.543.543 0 10-1.086 0v2.484a.543.543 0 101.087 0V4.91zm-.542 3.927c-.3 0-.544.244-.544.544v.005c0 .3.244.543.544.543h.004c.3 0 .543-.244.543-.543V9.38c0-.3-.243-.544-.543-.544h-.004z" fill="var(--made-color-feedback-background-error)" />
                    </svg>
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

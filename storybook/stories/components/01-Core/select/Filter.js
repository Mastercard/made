import React, { useState } from "react";
import PropTypes from "prop-types";
import { uniqueInteger } from "../../../assets/js/global";

export const Filter = ({
    name,
    label,
    placeholder,
    options,
    hasCTA,
    ctaPosition,
    ctaText,
    state,
}) => {
    let groupId = uniqueInteger(1000); //generate unique id between 0 and 1000

    const toggleSelect = (event) => {
        event.currentTarget;
        event.currentTarget.classList.toggle(
            "made-c-overflow-menu__link--selected"
        );
    };

    return (
        <div class="made-c-form__element">
            {state != "inline-multi-select" && (
                <label for={name} class="made-c-form__label">
                    {label}
                </label>
            )}
            {state == "filter" && (
                <div class="made-c-text-input__wrapper">
                    <input
                        type="text"
                        id={name}
                        name={name}
                        class="made-c-text-input made-c-text-input--select-filter made-u-margin-bottom-0-x"
                        placeholder={placeholder}
                    />
                    <button class="made-c-select__button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10 9.11612L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L10.8839 10L15.4419 14.5581C15.686 14.8021 15.686 15.1979 15.4419 15.4419C15.1979 15.686 14.8021 15.686 14.5581 15.4419L10 10.8839L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L9.11612 10L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z" fill="#141413" />
                        </svg>
                    </button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="made-c-select__arrow">
                        <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
            {state == "filter" && (
                <div class="made-c-overflow-menu made-c-overflow-menu--form">
                    {hasCTA && ctaPosition == "Top" && (
                        <div class="made-c-overflow-menu__cta made-c-overflow-menu__cta--top">
                            <a href="">{ctaText}</a>
                        </div>
                    )}
                    <ul class="made-c-overflow-menu__list made-c-scrollbar">
                        {options != null && Object.keys(options).length > 0 ? (
                            Object.keys(options).map((key) => (
                                <li class="made-c-overflow-menu__item">
                                    <a
                                        class="made-c-overflow-menu__link made-c-overflow-menu__link--form"
                                        href=""
                                    >
                                        <div class="made-u-margin-bottom-2-x">
                                            <strong>{[key]}</strong>
                                        </div>
                                        <div>{options[key]}</div>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li class="made-c-overflow-menu__item">
                                <a
                                    class="made-c-overflow-menu__link made-c-overflow-menu__link--form"
                                    href=""
                                >
                                    <div class="made-u-margin-bottom-2-x">
                                        <strong>Option 1</strong>
                                    </div>
                                    <div>
                                        Description text of this option -
                                        single-line
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                    {hasCTA && ctaPosition == "Bottom" && (
                        <div class="made-c-overflow-menu__cta made-c-overflow-menu__cta--bottom">
                            <a href="">{ctaText}</a>
                        </div>
                    )}
                </div>
            )}
            {state == "multi-select" && (
                <div class="made-c-select__wrapper">
                    <button class="made-c-select made-u-text-left made-u-margin-bottom-0-x">
                        {placeholder}
                    </button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="made-c-select__arrow">
                        <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
            {(state == "multi-select" || state == "inline-multi-select") && (
                <div class="made-c-overflow-menu made-c-overflow-menu--form">
                    {state == "inline-multi-select" && (
                        <div class="made-c-overflow-menu__cta made-c-overflow-menu__cta--top">
                            <a href="" role="button">
                                {label}
                            </a>
                        </div>
                    )}
                    <ul class="made-c-overflow-menu__list made-c-overflow-menu__list--select made-c-scrollbar">
                        {options != null && options.length > 0 ? (
                            options.map(function (label, index) {
                                let uniqueId = uniqueInteger(1000);
                                return (
                                    <li class="made-c-overflow-menu__item">
                                        <div class="made-c-form__element made-u-width-100">
                                            <input
                                                class="made-c-checkbox"
                                                name={`checkbox-${groupId}`}
                                                type="checkbox"
                                                id={`checkbox-group-${uniqueId}`}
                                                value={index}
                                            />
                                            <label
                                                className="made-c-overflow-menu__multiselect-item made-c-checkbox__label made-c-overflow-menu__link made-c-overflow-menu__link--left-align"
                                                for={`checkbox-group-${uniqueId}`}
                                                onClick={toggleSelect}
                                            >
                                                {label}
                                            </label>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <li class="made-c-overflow-menu__item">
                                <div class="made-c-form__element made-u-width-100">
                                    <input
                                        class="made-c-checkbox"
                                        name="checkbox-89"
                                        type="checkbox"
                                        id="checkbox-group-x"
                                        value="0"
                                    />
                                    <label
                                        className="made-c-checkbox__label made-c-overflow-menu__link made-c-overflow-menu__link--left-align"
                                        for="checkbox-group-X"
                                        onClick={toggleSelect}
                                    >
                                        Unselected Option
                                    </label>
                                </div>
                            </li>
                        )}
                    </ul>
                    {state == "inline-multi-select" && (
                        <div class="made-c-overflow-menu__cta made-c-overflow-menu__cta--bottom">
                            <button
                                type="button"
                                class="made-c-button made-c-button--primary"
                            >
                                {ctaText}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

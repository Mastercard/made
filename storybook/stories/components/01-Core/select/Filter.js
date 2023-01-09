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
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              xmlns="http://www.w3.org/2000/svg"
              class="made-c-select__icon-clear"
            >
              <title>close</title>
              <path
                d="m23.585.146 1.768 1.768-10.586 10.585 10.586 10.585-1.768 1.768L13 14.266 2.415 24.852.647 23.084 11.233 12.5.647 1.914 2.415.146 13 10.732 23.585.146Z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <svg
            width="12"
            class="made-c-select__arrow"
            height="6"
            viewBox="0 0 12 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>arrow</title>
            <path d="M6 6L0 0h12z" fill="currentColor" fill-rule="evenodd" />
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
                  <div>Description text of this option - single-line</div>
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
          <svg
            width="12"
            class="made-c-select__arrow"
            height="6"
            viewBox="0 0 12 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>arrow</title>
            <path d="M6 6L0 0h12z" fill="currentColor" fill-rule="evenodd" />
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
                        className="made-c-checkbox__label made-c-overflow-menu__link made-c-overflow-menu__link--left-align"
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

Filter.propTypes = {};
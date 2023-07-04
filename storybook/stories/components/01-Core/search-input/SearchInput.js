import React, { useState } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const SearchInput = ({
  name,
  value,
  placeholder,
  state,
  validationText,
  rounded,
}) => {
  let isDisabled, isValidationState;
  let validationClass = "";
  let roundedClass = "";

  const btnRef = useRef();

  const handleClick = (e) => {
    btnRef.current.focus();
    setTextValue('');
    e.currentTarget.classList.remove('made-c-search-input__close-button-show');
  };

  const [textValue, setTextValue] = useState(value);
  const handleInput = (e) => {
    setTextValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      btnRef.current.classList.add('made-c-search-input__close-button-show');
    } else {
      btnRef.current.classList.remove('made-c-search-input__close-button-show');
    }
  };

  if (state == "disabled") {
    isDisabled = true;
  } else if (state == "error") {
    validationClass = state;
    isValidationState = true;
  }

  if (rounded) {
    rounded = true;
    roundedClass = "made-c-search-input--rounded";
  }
  return (
    <div class="made-c-form__element">
      <div className="made-c-search-input__wrapper">
        <input
          type="text"
          id={name}
          name="default"
          onChange={handleInput}
          value={textValue}
          className={
            isValidationState
              ? `made-c-search-input made-u-margin-bottom-2-x made-c-search-input--${validationClass} ${roundedClass}`
              : `made-c-search-input made-u-margin-bottom-2-x ${roundedClass}`
          }
          placeholder={placeholder}
          disabled={isDisabled}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="made-c-search-input__search-icon"
        >
          <title>search</title>
          <path
            d="M9.083 0a9.083 9.083 0 016.936 14.948L24 22.93 22.93 24l-7.982-7.981A9.083 9.083 0 119.083 0zm.093 1.412a7.765 7.765 0 100 15.53 7.765 7.765 0 000-15.53z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
        <button
          type="button"
          className="made-c-search-input__close-button made-c-search-input__close-button-show"
          disabled={isDisabled}
          ref={btnRef}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            className="made-c-search-input__close-button-icon"
          >
            <title>close</title>
            <path
              d="M23.585.146l1.768 1.768-10.586 10.585 10.586 10.585-1.768 1.768L13 14.266 2.415 24.852.647 23.084 11.233 12.5.647 1.914 2.415.146 13 10.732 23.585.146z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isValidationState && (
        <div
          className={`made-c-form__validation--${validationClass} made-c-form__validation--search-input`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 23"
            xmlns="http://www.w3.org/2000/svg"
            class="made-u-margin-right-1-x made-u-flex-shrink-0"
          >
            <title>exclamation mark in a triangle - solid fill</title>
            <path
              d="M11.967 17.003c.617 0 1.012.465 1.012 1.109 0 .626-.395 1.11-1.012 1.11-.602 0-1.013-.484-1.013-1.11 0-.644.43-1.11 1.013-1.11zm.824-10.038l-.24 8.588h-1.167l-.241-8.588h1.648zM24 22.8H0L12 0l12 22.8z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
          <span>{validationText}</span>
        </div>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validationText: PropTypes.string,
  state: PropTypes.oneOf(["default", "disabled", "error", "success"]),
  rounded: PropTypes.bool,
};

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
        <svg class="made-c-form__icon made-c-form__icon--left" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" fill="currentColor" />
        </svg>
        <button
          type="button"
          className="made-c-search-input__close-button made-c-search-input__close-button-show"
          disabled={isDisabled}
          ref={btnRef}
          onClick={handleClick}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10 9.11612L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L10.8839 10L15.4419 14.5581C15.686 14.8021 15.686 15.1979 15.4419 15.4419C15.1979 15.686 14.8021 15.686 14.5581 15.4419L10 10.8839L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L9.11612 10L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z" fill="currentColor" />
          </svg>
        </button>
      </div>
      {isValidationState && (
        <div
          className={`made-c-form__validation--${validationClass} made-c-form__validation--search-input`}
        >
          <svg class="made-u-margin-right-1-x made-u-flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.495 1.87c.669-1.16 2.341-1.16 3.01 0l4.26 7.383c.668 1.159-.168 2.606-1.505 2.606H1.74c-1.337 0-2.173-1.447-1.505-2.606l4.26-7.384zm2.13 3.04a.543.543 0 10-1.086 0v2.484a.543.543 0 101.087 0V4.91zm-.542 3.927c-.3 0-.544.244-.544.544v.005c0 .3.244.543.544.543h.004c.3 0 .543-.244.543-.543V9.38c0-.3-.243-.544-.543-.544h-.004z" fill="currentColor" />
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

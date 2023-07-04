import React from "react";
import PropTypes from "prop-types";

export const Pill = ({
  text,
  isDismissable,
  isDisabled,
  isBranded,
  isSquared,
  size,
}) => {
  let dismissableClass = "";
  let brandedClass = "";
  let disabledClass = "";
  let squaredClass = "";
  let sizeClass = "";
  let iconCloseSize = "";

  if (size == "small") {
    sizeClass = "made-c-pill--sm";
    iconCloseSize = "10";
  }
  else{
    sizeClass = "";
    iconCloseSize = "14";
  }

  if (isDismissable) {
    dismissableClass = "made-c-pill--dismissable";
  }

  if (isDisabled) {
    disabledClass = "made-c-pill--disabled";
  }

  if (isBranded) {
    brandedClass = "made-c-pill--branded";
  }

  if (isSquared){
    squaredClass = "made-c-pill--squared";
  }

  return (
    <div
      tabIndex={0}
      className={ `made-c-pill ${sizeClass} ${dismissableClass} ${brandedClass} ${disabledClass} ${squaredClass}` }>
      <span class="made-c-pill__label">
        {text}
      </span>
      {isBranded && (
      <div className="made-c-pill__brand-icon">
        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0731 7.90576V8.32243H16.0376V8.00743L15.9832 8.27923H15.9464L15.8921 8.00802V8.32243H15.8564V7.90576H15.9069L15.9649 8.19226L16.0228 7.90576H16.0731ZM15.754 7.97658V8.32243H15.7189V7.97658H15.6543V7.90606H15.8186V7.97658H15.754Z" fill="#F89E1B"/>
          <path d="M5.91602 8.9579H10.3139V1.10449H5.91602V8.9579Z" fill="#F16522"/>
          <path d="M6.19947 5C6.19947 3.40497 6.94866 1.98451 8.11518 1.06901C7.26211 0.399475 6.18547 0 5.01552 0C2.2455 0 0 2.23856 0 5C0 7.76144 2.2455 10 5.01552 10C6.18547 10 7.26211 9.60052 8.11518 8.93099C6.94866 8.01549 6.19947 6.59503 6.19947 5Z" fill="#E52523"/>
          <path d="M16.2304 5C16.2304 7.76144 13.9849 10 11.2149 10C10.0448 10 8.96831 9.60052 8.11523 8.93099C9.28176 8.01549 10.0309 6.59503 10.0309 5C10.0309 3.40497 9.28176 1.98451 8.11523 1.06901C8.96831 0.399475 10.0448 0 11.2149 0C13.9849 0 16.2304 2.23856 16.2304 5Z" fill="#F89E1B"/>
        </svg>
      </div>
      )}
      {isDismissable && (
        <button 
          className="made-c-pill__button"
          disabled={isDisabled}
          aria-label="Close"
        >
        <svg width={ `${iconCloseSize}` } height={ `${iconCloseSize}` } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z" />
        </svg>
        </button>
      )}
    </div>
  );
};

Pill.propTypes = {
  text: PropTypes.string,
  isDismissable: PropTypes.bool,
  isBranded: PropTypes.bool,
  size: PropTypes.oneOf(["default", "small"]),
};

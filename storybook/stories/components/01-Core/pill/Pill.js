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
          <path fillRule="evenodd" clipRule="evenodd" d="M16.0731 7.90576V8.32243H16.0376V8.00743L15.9832 8.27923H15.9464L15.8921 8.00802V8.32243H15.8564V7.90576H15.9069L15.9649 8.19226L16.0228 7.90576H16.0731ZM15.754 7.97658V8.32243H15.7189V7.97658H15.6543V7.90606H15.8186V7.97658H15.754Z" fill="#F89E1B"/>
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
        <svg width={ `${iconCloseSize}` } height={ `${iconCloseSize}` } viewBox={`0 0 ${iconCloseSize} ${iconCloseSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.44064 3.19064C3.6115 3.01979 3.8885 3.01979 4.05936 3.19064L7.25 6.38128L10.4406 3.19064C10.6115 3.01979 10.8885 3.01979 11.0594 3.19064C11.2302 3.3615 11.2302 3.63851 11.0594 3.80936L7.86872 7L11.0594 10.1906C11.2302 10.3615 11.2302 10.6385 11.0594 10.8094C10.8885 10.9802 10.6115 10.9802 10.4406 10.8094L7.25 7.61872L4.05936 10.8094C3.8885 10.9802 3.6115 10.9802 3.44064 10.8094C3.26979 10.6385 3.26979 10.3615 3.44064 10.1906L6.63128 7L3.44064 3.80936C3.26979 3.6385 3.26979 3.3615 3.44064 3.19064Z" />
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

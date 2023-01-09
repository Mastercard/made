import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  text,
  style,
  isDisabled,
  showIcon,
  size,
  isResponsive,
  background,
}) => {
  let styleClass = "";
  let withIconClass = "";
  let sizeSmallClass = "";
  let responsiveClass = "";
  let backgroundClass = "";

  if (style == "primary" && background == "default") {
    styleClass = "primary";
    withIconClass = "made-c-button__icon";
  } else if (style == "secondary" && background == "default") {
    styleClass = "secondary";
    withIconClass = "made-c-button__icon";
  } else if (style == "ghost" && background == "default") {
    styleClass = "ghost";
    withIconClass = "made-c-button__icon--ghost";
  } else if (style == "primary" && background == "dark") {
    styleClass = "primary-on-dark";
    withIconClass = "made-c-button__icon";
  } else if (style == "secondary" && background == "dark") {
    styleClass = "secondary-on-dark";
    withIconClass = "made-c-button__icon";
  } else if (style == "ghost" && background == "dark") {
    styleClass = "ghost-on-dark";
    withIconClass = "made-c-button__icon--ghost";
  }

  if (size == "small") {
    sizeSmallClass = "made-c-button--small";
  }

  if (isResponsive == true) {
    responsiveClass = "made-u-width-100";
    showIcon = false;
  }

  if (background == "dark") {
    backgroundClass = "made-s-background-dark";
  }

  return (
    <div className={backgroundClass}>
      <button
        id={style}
        type="button"
        className={
          showIcon == true
            ? `made-c-button made-c-button--${styleClass} made-c-button--icon ${sizeSmallClass} ${responsiveClass}`
            : `made-c-button made-c-button--${styleClass} ${sizeSmallClass} ${responsiveClass}`
        }
        disabled={isDisabled}
      >
        {text}
        {showIcon && (
          <svg
            className={withIconClass}
            width="24"
            height="16"
            viewBox="0 0 24 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>arrow-forward</title>
            <path
              d="M19.024.42L24 7.999l-4.976 7.579-.708-.891L22.31 8.6H0v-1.09l22.387-.001-4.071-6.199.708-.891z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  isDisabled: PropTypes.bool,
  showIcon: PropTypes.bool,
  size: PropTypes.oneOf(["default", "small"]),
  isResponsive: PropTypes.bool,
  background: PropTypes.oneOf(["default", "dark"]),
};

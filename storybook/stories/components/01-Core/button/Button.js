import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const Button = ({
  text,
  style,
  isDisabled,
  showIcon,
  showLoading,
  showIconOnly,
  showLoadingOnly,
  size,
  isResponsive,
  background,
  iconPosition
}) => {
  const btnRef = useRef();

  const handleClick = () => {
    btnRef.current.focus();
  };

  let styleClass = "";
  let withLoadingClass = "";
  let iconPositionClass = "";
  let sizeSmallClass = "";
  let responsiveClass = "";
  let backgroundClass = "";

  if (style == "primary" && background == "default") {
    styleClass = "primary";
    withLoadingClass = "made-c-loading--on-primary";
  } else if (style == "secondary" && background == "default") {
    styleClass = "secondary";
    withLoadingClass = "made-c-loading";
  } else if (style == "ghost" && background == "default") {
    styleClass = "ghost";
    withLoadingClass = "made-c-loading--default";
  } else if (style == "primary" && background == "dark") {
    styleClass = "primary-on-dark";
    withLoadingClass = "made-c-loading--default";
  } else if (style == "secondary" && background == "dark") {
    styleClass = "secondary-on-dark";
    withLoadingClass = "made-c-loading--on-primary";
  } else if (style == "ghost" && background == "dark") {
    styleClass = "ghost-on-dark";
    withLoadingClass = "made-c-loading--on-primary";
  }

  if (size == "small") {
    sizeSmallClass = "made-c-button--small";
  }

  if (isResponsive == true) {
    responsiveClass = "made-u-width-100";
  }

  if (background == "dark") {
    backgroundClass = "made-s-background-dark";
  }

  if (iconPosition == "left" && !showIconOnly) {
    iconPositionClass = "made-u-margin-right-2-x";
  } else if (iconPosition == "right" && !showIconOnly) {
    iconPositionClass = "made-u-margin-left-2-x";
  }

  return (
    <div className={backgroundClass}>
      <button
        id={style}
        type="button"
        ref={btnRef}
        onClick={handleClick}
        className={`made-c-button ${showIconOnly ? `made-c-button--icon-only` : ""
          }
          ${showIcon == true ? `made-c-button made-c-button--${styleClass} ${iconPositionClass} ${sizeSmallClass} ${responsiveClass}` : `made-c-button made-c-button--${styleClass} ${sizeSmallClass} ${responsiveClass}`}`
        }
        disabled={isDisabled}
      >
        {showIcon && iconPosition == "left" && (
          <svg className={`${iconPositionClass}`} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.055 4.418a1 1 0 01.277 1.387l-9 13.5a1 1 0 01-1.54.152l-6-6a1 1 0 111.415-1.414l5.138 5.137 8.323-12.485a1 1 0 011.387-.277z" fill="currentColor" />
          </svg>
        )}
        {showLoading && iconPosition == "left" && !showIconOnly && !showLoadingOnly && (
          <div className={`${withLoadingClass} made-c-loading--xsmall made-u-margin-left-2-x made-u-margin-right-2-x`} role="status"></div>
        )}
        {!showIconOnly && !showLoadingOnly && (
          <span>{text}</span>
        )}
        {showIconOnly && !showLoading && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" fill="currentColor" />
          </svg>
        )}

        {showLoadingOnly && !showIcon && (
          <div className={`${withLoadingClass} made-c-loading--xsmall made-u-margin-left-2-x made-u-margin-right-2-x`} role="status"></div>
        )}
        {showLoading && iconPosition == "right" && !showLoadingOnly && !showIconOnly && (
          <div className={`${withLoadingClass} made-c-loading--xsmall made-u-margin-left-2-x made-u-margin-right-2-x`} role="status"></div>
        )}
        {showIcon && iconPosition == "right" && !showLoadingOnly && !showIconOnly && (
          <svg className={`${iconPositionClass}`} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.22 4.72a.75.75 0 011.06 0l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 010-1.5h13.19l-5.47-5.47a.75.75 0 010-1.06z" fill="currentColor" />
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
  showIconOnly: PropTypes.bool,
  showLoading: PropTypes.bool,
  showLoadingOnly: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  isResponsive: PropTypes.bool,
  background: PropTypes.oneOf(["default", "dark"]),
};

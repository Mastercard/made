import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const Toast = ({ type, title, showCloseButton }) => {
    let typeHtml = "";
    let typeIconTitle = "";
    let typeIconPath = "";

    const btnRef = useRef();

    const handleClick = () => {
        btnRef.current.focus();
    };

    if (type == "success") {
        typeHtml = "made-c-toast--success";
        typeIconTitle = "ui / process complete";
        typeIconPath =
            "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z";
    } else if (type == "error") {
        typeHtml = "made-c-toast--error";
        typeIconTitle = "ui / warning";
        typeIconPath =
            "M9.4 4.003c1.155-2 4.043-2 5.198 0l7.354 12.748c1.154 2-.29 4.499-2.598 4.499H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 4.004zM12 9.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V10a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z";
    } else if (type == "informational") {
        typeHtml = "made-c-toast--information";
        typeIconTitle = "Icons / Mastercard / UI / notification";
        typeIconPath =
            "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z";
    } else if (type == "success-light") {
        typeHtml = "made-c-toast--success-light";
        typeIconTitle = "ui / process complete";
        typeIconPath =
            "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z";
    } else if (type == "error-light") {
        typeHtml = "made-c-toast--error-light";
        typeIconTitle = "ui / warning";
        typeIconPath =
            "M9.4 4.003c1.155-2 4.043-2 5.198 0l7.354 12.748c1.154 2-.29 4.499-2.598 4.499H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 4.004zM12 9.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V10a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z";
    } else if (type == "informational-light") {
        typeHtml = "made-c-toast--information-light";
        typeIconTitle = "Icons / Mastercard / UI / notification";
        typeIconPath =
            "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z";
    }

    return (
        <div class={`made-c-toast ${typeHtml}`} role="status">
            <svg
                class="made-c-toast__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>{typeIconTitle}</title>
                <path
                    d={typeIconPath}
                    fill="currentColor"
                    fill-rule="evenodd"
                />
            </svg>
            <div class="made-c-toast__content">{title}</div>
            {showCloseButton && (
                <button
                    type="button"
                    className="made-c-toast__button-close"
                    ref={btnRef}
                    onClick={handleClick}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10 9.11612L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L10.8839 10L15.4419 14.5581C15.686 14.8021 15.686 15.1979 15.4419 15.4419C15.1979 15.686 14.8021 15.686 14.5581 15.4419L10 10.8839L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L9.11612 10L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z" fill="currentColor" />
                    </svg>
                </button>
            )}
        </div>
    );
};

Toast.propTypes = {
    type: PropTypes.oneOf([
        "success",
        "error",
        "informational",
        "success-light",
        "error-light",
        "informational-light",
    ]),
    title: PropTypes.string,
    showCloseButton: PropTypes.bool,
};

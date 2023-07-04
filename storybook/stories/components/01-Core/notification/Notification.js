import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export const Notification = ({
    type,
    title,
    showLink,
    link,
    subtitle,
    showCloseButton,
}) => {
    let typeHtml = "";
    let typeIconTitle = "";
    let typeIconPath = "";

    const btnRef = useRef();

    const handleClick = () => {
      btnRef.current.focus();
    };

    if (type == "success") {
        typeHtml = "made-c-notification--success";
        typeIconTitle = "ui / process complete";
        typeIconPath =
            "M12.5 2C18.29 2 23 6.71 23 12.5S18.29 23 12.5 23 2 18.29 2 12.5 6.71 2 12.5 2zm0 1C7.262 3 3 7.262 3 12.5S7.262 22 12.5 22s9.5-4.262 9.5-9.5S17.738 3 12.5 3zm6.146 5.646l.708.708L11 17.707l-5.354-5.353.708-.708L11 16.293l7.646-7.647z";
    } else if (type == "error") {
        typeHtml = "made-c-notification--error";
        typeIconTitle = "ui / warning";
        typeIconPath =
            "M12.5 1L23 23H2L12.5 1zm0 2.322L3.585 22h17.83L12.5 3.322zM13 18v2h-1v-2h1zm0-11v9h-1V7h1z";
    } else if (type == "informational") {
        typeHtml = "made-c-notification--information";
        typeIconTitle = "Icons / Mastercard / UI / notification";
        typeIconPath =
            "M12.5 2C18.29 2 23 6.71 23 12.5S18.29 23 12.5 23 2 18.29 2 12.5 6.71 2 12.5 2zm0 1C7.262 3 3 7.262 3 12.5S7.262 22 12.5 22s9.5-4.262 9.5-9.5S17.738 3 12.5 3zm.5 14v2h-1v-2h1zm0-11v9h-1V6h1z";
    } else if (type == "success-light") {
        typeHtml = "made-c-notification--success-light";
        typeIconTitle = "ui / process complete";
        typeIconPath =
            "M12.5 2C18.29 2 23 6.71 23 12.5S18.29 23 12.5 23 2 18.29 2 12.5 6.71 2 12.5 2zm0 1C7.262 3 3 7.262 3 12.5S7.262 22 12.5 22s9.5-4.262 9.5-9.5S17.738 3 12.5 3zm6.146 5.646l.708.708L11 17.707l-5.354-5.353.708-.708L11 16.293l7.646-7.647z";
    } else if (type == "error-light") {
        typeHtml = "made-c-notification--error-light";
        typeIconTitle = "ui / warning";
        typeIconPath =
            "M12.5 1L23 23H2L12.5 1zm0 2.322L3.585 22h17.83L12.5 3.322zM13 18v2h-1v-2h1zm0-11v9h-1V7h1z";
    } else if (type == "informational-light") {
        typeHtml = "made-c-notification--information-light";
        typeIconTitle = "Icons / Mastercard / UI / notification";
        typeIconPath =
            "M12.5 2C18.29 2 23 6.71 23 12.5S18.29 23 12.5 23 2 18.29 2 12.5 6.71 2 12.5 2zm0 1C7.262 3 3 7.262 3 12.5S7.262 22 12.5 22s9.5-4.262 9.5-9.5S17.738 3 12.5 3zm.5 14v2h-1v-2h1zm0-11v9h-1V6h1z";
    }

    return (
        <div class={`made-c-notification ${typeHtml}`} role="alert">
            <svg
                class="made-c-notification__icon"
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
            <div class="made-c-notification__content">
                <div class="made-c-notification__title">
                    <span>{title}</span>
                    {showLink && (
                        <a
                            href="#"
                            class="made-c-notification__link made-u-text-decoration-underline"
                        >
                            {link}
                        </a>
                    )}
                </div>
                <p class="made-c-notification__subtitle">{subtitle}</p>
            </div>

            {showCloseButton && (
                <button
                    type="button"
                    class="made-c-notification__button-close"
                    ref={btnRef}
                    onClick={handleClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="made-c-notification__button-close-icon"
                    >
                        <title>close</title>
                        <path
                            d="M23.585.146l1.768 1.768-10.586 10.585 10.586 10.585-1.768 1.768L13 14.266 2.415 24.852.647 23.084 11.233 12.5.647 1.914 2.415.146 13 10.732 23.585.146z"
                            fill="currentColor"
                            fill-rule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf([
        "success",
        "error",
        "informational",
        "success-light",
        "error-light",
        "informational-light",
    ]),
    title: PropTypes.string,
    showLink: PropTypes.bool,
    link: PropTypes.string,
    subtitle: PropTypes.string,
    showCloseButton: PropTypes.bool,
};
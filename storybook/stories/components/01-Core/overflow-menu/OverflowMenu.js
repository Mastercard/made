import React from "react";
import PropTypes from "prop-types";

export const OverflowMenu = ({ options, align, icon, iconPosition }) => {
    let isAlignLeft = true;
    let isIcon = false;

    if (align == "right") {
        isAlignLeft = false;
    }

    if (icon == true) {
        isIcon = true;
    }

    return (
        <ul className={
            isAlignLeft
                ? "made-c-overflow-menu"
                : "made-c-overflow-menu made-c-overflow-menu--right-align"
        }>
            {options != null && options.length > 0 ? (
                options.map(function (label, index) {
                    return (
                        <li class="made-c-overflow-menu__item" id={index}>
                            <a
                                className={
                                    isAlignLeft
                                        ? "made-c-overflow-menu__link"
                                        : "made-c-overflow-menu__link made-c-overflow-menu__link--right-align"
                                }
                                href=""
                                tabIndex="0"
                            >
                                {isIcon && iconPosition == "left" && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25a6.75 6.75 0 00-3.382 12.593c.997.579 1.882 1.63 1.882 2.965V18A.75.75 0 019 18v-.192c0-.63-.432-1.26-1.135-1.668l.377-.648-.377.648a8.25 8.25 0 118.27 0c-.703.408-1.135 1.038-1.135 1.668V18a.75.75 0 01-1.5 0v-.192c0-1.335.885-2.386 1.882-2.965A6.75 6.75 0 0012 2.25zM9.774 12.374a.75.75 0 01.913-.54 5.262 5.262 0 002.626 0 .75.75 0 01.374 1.453 6.74 6.74 0 01-.937.172V18a.75.75 0 01-1.5 0v-4.541a6.74 6.74 0 01-.937-.172.75.75 0 01-.54-.913zm-.76 7.526a.75.75 0 01.876-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zm.74 2.444a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" fill="currentColor" />
                                    </svg>
                                )}
                                {label}
                                {isIcon && iconPosition == "right" && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25a6.75 6.75 0 00-3.382 12.593c.997.579 1.882 1.63 1.882 2.965V18A.75.75 0 019 18v-.192c0-.63-.432-1.26-1.135-1.668l.377-.648-.377.648a8.25 8.25 0 118.27 0c-.703.408-1.135 1.038-1.135 1.668V18a.75.75 0 01-1.5 0v-.192c0-1.335.885-2.386 1.882-2.965A6.75 6.75 0 0012 2.25zM9.774 12.374a.75.75 0 01.913-.54 5.262 5.262 0 002.626 0 .75.75 0 01.374 1.453 6.74 6.74 0 01-.937.172V18a.75.75 0 01-1.5 0v-4.541a6.74 6.74 0 01-.937-.172.75.75 0 01-.54-.913zm-.76 7.526a.75.75 0 01.876-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zm.74 2.444a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" fill="currentColor" />
                                    </svg>
                                )}
                            </a>
                        </li>
                    );
                })
            ) : (
                <li class="made-c-overflow-menu__item">
                    <a
                        className={
                            isAlignLeft
                                ? "made-c-overflow-menu__link"
                                : "made-c-overflow-menu__link made-c-overflow-menu__link--right-align"
                        }
                        href=""
                    >
                        Option 1
                    </a>
                </li>
            )}
        </ul>
    );
};

OverflowMenu.propTypes = {
    options: PropTypes.objectOf(PropTypes.string),
    icon: PropTypes.boolean,
    align: PropTypes.oneOf(["left", "right"]),
};

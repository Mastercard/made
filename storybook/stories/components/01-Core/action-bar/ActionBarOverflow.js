import React from "react";
import PropTypes from "prop-types";

export const ActionBarOverflow = ({
    show,
    dropdown1,
    dropdown2,
    dropdown3,
}) => {
    return (
        <ul class="made-c-action-bar">
            <li class="made-c-action-bar__item">
                <a href="" role="button">
                    Dropdown 1
                    <svg
                        width="8"
                        height="4"
                        viewBox="0 0 24 11"
                        xmlns="http://www.w3.org/2000/svg"
                        class="made-c-action-bar__icon made-u-margin-left-2-x"
                    >
                        <title>arrowhead-upward</title>
                        {show == "Dropdown 1" && (
                            <path
                                d="M12 0L0 9l1.069 1.425L12 2.226l10.931 8.199L24 9z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                        {show != "Dropdown 1" && (
                            <path
                                d="M12 10.425l-12-9L1.069 0 12 8.198 22.931 0 24 1.425z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                    </svg>
                </a>
                {show == "Dropdown 1" && (
                    <ul class="made-c-overflow-menu made-c-overflow-menu--action-bar made-u-margin-top-1-x">
                        {dropdown1 != null && dropdown1.length > 0 ? (
                            dropdown1.map(function (label, index) {
                                return (
                                    <li
                                        class="made-c-overflow-menu__item"
                                        id={index}
                                    >
                                        <a
                                            class="made-c-overflow-menu__link"
                                            href=""
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })
                        ) : (
                            <li class="made-c-overflow-menu__item">
                                <a class="made-c-overflow-menu__link" href="">
                                    Item1
                                </a>
                            </li>
                        )}
                    </ul>
                )}
            </li>
            <li class="made-c-action-bar__item">
                <a href="" role="button">
                    Dropdown 2
                    <svg
                        width="8"
                        height="4"
                        viewBox="0 0 24 11"
                        xmlns="http://www.w3.org/2000/svg"
                        class="made-c-action-bar__icon made-u-margin-left-2-x"
                    >
                        <title>arrowhead-upward</title>
                        {show == "Dropdown 2" && (
                            <path
                                d="M12 0L0 9l1.069 1.425L12 2.226l10.931 8.199L24 9z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                        {show != "Dropdown 2" && (
                            <path
                                d="M12 10.425l-12-9L1.069 0 12 8.198 22.931 0 24 1.425z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                    </svg>
                </a>
                {show == "Dropdown 2" && (
                    <ul class="made-c-overflow-menu made-c-overflow-menu--action-bar made-u-margin-top-1-x">
                        {dropdown2 != null && dropdown2.length > 0 ? (
                            dropdown2.map(function (label, index) {
                                return (
                                    <li
                                        class="made-c-overflow-menu__item"
                                        id={index}
                                    >
                                        <a
                                            class="made-c-overflow-menu__link"
                                            href=""
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })
                        ) : (
                            <li class="made-c-overflow-menu__item">
                                <a class="made-c-overflow-menu__link" href="">
                                    Item1
                                </a>
                            </li>
                        )}
                    </ul>
                )}
            </li>
            <li class="made-c-action-bar__item">
                <a href="" role="button">
                    Dropdown 3
                    <svg
                        width="8"
                        height="4"
                        viewBox="0 0 24 11"
                        xmlns="http://www.w3.org/2000/svg"
                        class="made-c-action-bar__icon made-u-margin-left-2-x"
                    >
                        <title>arrowhead-upward</title>
                        {show == "Dropdown 3" && (
                            <path
                                d="M12 0L0 9l1.069 1.425L12 2.226l10.931 8.199L24 9z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                        {show != "Dropdown 3" && (
                            <path
                                d="M12 10.425l-12-9L1.069 0 12 8.198 22.931 0 24 1.425z"
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        )}
                    </svg>
                </a>
                {show == "Dropdown 3" && (
                    <ul class="made-c-overflow-menu made-c-overflow-menu--action-bar made-u-margin-top-1-x">
                        {dropdown3 != null && dropdown3.length > 0 ? (
                            dropdown3.map(function (label, index) {
                                return (
                                    <li
                                        class="made-c-overflow-menu__item"
                                        id={index}
                                    >
                                        <a
                                            class="made-c-overflow-menu__link"
                                            href=""
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })
                        ) : (
                            <li class="made-c-overflow-menu__item">
                                <a class="made-c-overflow-menu__link" href="">
                                    Item1
                                </a>
                            </li>
                        )}
                    </ul>
                )}
            </li>
        </ul>
    );
};

ActionBarOverflow.propTypes = {
    show: PropTypes.oneOf(["Dropdown 1", "Dropdown 2", "Dropdown 3"]),
    dropdown1: PropTypes.objectOf(PropTypes.string),
    dropdown2: PropTypes.objectOf(PropTypes.string),
    dropdown3: PropTypes.objectOf(PropTypes.string),
};
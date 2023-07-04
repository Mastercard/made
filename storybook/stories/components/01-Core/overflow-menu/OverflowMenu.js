import React from "react";
import PropTypes from "prop-types";

export const OverflowMenu = ({ options, align }) => {
    let isAlignLeft = true;

    if (align == "right") {
        isAlignLeft = false;
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
                                {label}
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
    align: PropTypes.oneOf(["left", "right"]),
};

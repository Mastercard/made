import React from "react";
import PropTypes from "prop-types";

export const ActionBar = ({ items, isDisabled }) => {
    return (
        <ul class="made-c-action-bar">
            {items != null && items.length > 0 ? (
                items.map(function (label, index) {
                    return (
                        <li class="made-c-action-bar__item" id={index}>
                            <a
                                href=""
                                role="button"
                                className={
                                    isDisabled == true
                                        ? "made-u-link--disabled"
                                        : ""
                                }
                            >
                                {label}
                            </a>
                        </li>
                    );
                })
            ) : (
                <li class="made-c-action-bar__item">
                    <a
                        href=""
                        role="button"
                        className={
                            isDisabled == true ? "made-u-link--disabled" : ""
                        }
                    >
                        Item
                    </a>
                </li>
            )}
        </ul>
    );
};

ActionBar.propTypes = {
    items: PropTypes.objectOf(PropTypes.string),
    isDisabled: PropTypes.bool,
};
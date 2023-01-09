import React from "react";
import PropTypes from "prop-types";

export const Breadcrumb = ({
    isHomeIcon,
    links,
    isBackground,
    currentPage,
}) => {
    return (
        <nav
            className={
                isBackground
                    ? "made-c-breadcrumb made-c-breadcrumb--background"
                    : "made-c-breadcrumb"
            }
        >
            <ol class="made-c-breadcrumb__list">
                <li class="made-c-breadcrumb__item">
                    {isHomeIcon == true && (
                        <a href="" class="made-c-breadcrumb__link--home">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                class="made-c-breadcrumb__icon"
                            >
                                <title>home</title>
                                <path
                                    d="M3 11v11h6v-8h6v8h6V11h1v12h-8v-8h-4v8H2V11h1zm9-9.784l7 5.086V3h1v4.028l3.25 2.362-.587.808L12 2.452 1.337 10.198.75 9.39 12 1.216z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                />
                            </svg>
                        </a>
                    )}
                    {isHomeIcon == false && (
                        <a href="" class="made-c-breadcrumb__link">
                            Home
                        </a>
                    )}
                </li>
                {links != null && links.length > 0 ? (
                    links.map(function (label, index) {
                        return (
                            <li class="made-c-breadcrumb__item" id={index}>
                                <a href="" class="made-c-breadcrumb__link">
                                    {label}
                                </a>
                            </li>
                        );
                    })
                ) : (
                    <li class="made-c-breadcrumb__item">
                        <a href="" class="made-c-breadcrumb__link">
                            Page level 1
                        </a>
                    </li>
                )}

                <li class="made-c-breadcrumb__item made-c-breadcrumb__item--active">
                    {currentPage}
                </li>
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    isHomeIcon: PropTypes.bool,
    links: PropTypes.objectOf(PropTypes.string),
    isBackground: PropTypes.bool,
    currentPage: PropTypes.string,
};

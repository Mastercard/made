import React from "react";
import PropTypes from "prop-types";

export const Tabs = ({ tabs, content }) => {
    return (
        <div>
            <ul class="made-c-tabs__list">
                {tabs != null && tabs.length > 0 ? (
                    tabs.map(function (label, index) {
                        return (
                            <li class="made-c-tabs__item" id={index}>
                                <a
                                    href=""
                                    id={index}
                                    className={
                                        index == 0
                                            ? "made-c-tabs__link made-c-tabs__link--active"
                                            : "made-c-tabs__link"
                                    }
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })
                ) : (
                    <>
                        <li class="made-c-tabs__item" id="0">
                            <a
                                href=""
                                id="0"
                                className="made-c-tabs__link made-c-tabs__link--active"
                            >
                                Tab 1
                            </a>
                        </li>
                        <li class="made-c-tabs__item" id="1">
                            <a href="" id="1" className="made-c-tabs__link">
                                Tab 2
                            </a>
                        </li>
                        <li class="made-c-tabs__item" id="2">
                            <a href="" id="2" className="made-c-tabs__link">
                                Tab 3
                            </a>
                        </li>
                    </>
                )}
            </ul>
            <div>
                {tabs != null && tabs.length > 0 ? (
                    tabs.map(function (label, index) {
                        return (
                            <div
                                className={
                                    index == 0
                                        ? "made-c-tabs__content made-c-tabs__content--active"
                                        : "made-c-tabs__content"
                                }
                                role="tabpanel"
                                id={`tab-${index}`}
                            >
                                {content}
                            </div>
                        );
                    })
                ) : (
                    <>
                        <div
                            class="made-c-tabs__content made-c-tabs__content--active"
                            role="tabpanel"
                            id="tab-0"
                        >
                            Tab Content 1
                        </div>
                        <div
                            class="made-c-tabs__content"
                            role="tabpanel"
                            id="tab-1"
                        >
                            Tab Content 2
                        </div>
                        <div
                            class="made-c-tabs__content"
                            role="tabpanel"
                            id="tab-2"
                        >
                            Tab Content 3
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.objectOf(PropTypes.string),
    content: PropTypes.string,
};
import React from "react";
import PropTypes from "prop-types";

export const OverflowMenuMultilineIcon = ({
    label1,
    description1,
    icon1,
    label2,
    description2,
    icon2,
    label3,
    description3,
    icon3,
    label4,
    description4,
    icon4,
    label5,
    description5,
    icon5,
}) => {
    const iconAttributes = {
        title1: "",
        path1: "",
        viewBox1: "",
        title2: "",
        path2: "",
        viewBox2: "",
        title3: "",
        path3: "",
        viewBox3: "",
        title4: "",
        path4: "",
        viewBox4: "",
        title5: "",
        path5: "",
        viewBox5: ""
    };

    let iconTitleLocked = "padlock - locked";
    let iconPathLocked = "M10.105 0a7.579 7.579 0 017.58 7.579l-.001 1.263h2.527V24H0V8.842h2.526V7.579A7.579 7.579 0 0110.106 0zm6.948 12H3.158v8.842h13.895V12zm-6.948-8.842a4.421 4.421 0 00-4.42 4.42v1.264h8.841V7.58a4.421 4.421 0 00-4.42-4.421z";
    let iconViewBoxLocked = "0 0 21 24";

    let iconTitleArrowForward = "arrowhead-forward";
    let iconPathArrowForward = "M11.212 12.212l-9-12L.788 1.281l8.198 10.931L.788 23.144l1.424 1.068z";
    let iconViewBoxArrowForward = "0 0 12 25";

    let iconTitleClock = "clock - solid fill";
    let iconPathClock = "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0012 0zm1.5 12.379c.002.32-.107.628-.302.856L9.78 16.92l-1.61-1.556 3.248-3.48V4.448H13.5v7.93z";
    let iconViewBoxClock = "0 0 24 24";

    let iconTitleExclamationMark = "exclamation mark - solid fill";
    let iconPathExclamationMark = "M5 13.43H.38V0H5v13.43zM2.79 22a2.79 2.79 0 112.79-2.79A2.8 2.8 0 012.79 22z";
    let iconViewBoxExclamationMark = "0 0 6 22";

    let iconTitleCheckmark = "checkmark";
    let iconPathCheckmark = "M7.627 14.435l-5.69-5.69L0 10.67l7.627 7.627L24 1.924 22.076 0z";
    let iconViewBoxCheckmark = "0 0 24 19";

    if (icon1 == "locked") {
        iconAttributes.title1 = iconTitleLocked;
        iconAttributes.path1 = iconPathLocked;
        iconAttributes.viewBox1 = iconViewBoxLocked;
    } else if (icon1 == "arrowhead-forward") {
        iconAttributes.title1 = iconTitleArrowForward;
        iconAttributes.path1 = iconPathArrowForward;
        iconAttributes.viewBox1 = iconViewBoxArrowForward;
    } else if (icon1 == "clock") {
        iconAttributes.title1 = iconTitleClock;
        iconAttributes.path1 = iconPathClock;
        iconAttributes.viewBox1 = iconViewBoxClock;
    } else if (icon1 == "exclamation-mark") {
        iconAttributes.title1 = iconTitleExclamationMark;
        iconAttributes.path1 = iconPathExclamationMark;
        iconAttributes.viewBox1 = iconViewBoxExclamationMark;
    } else if (icon1 == "checkmark") {
        iconAttributes.title1 = iconTitleCheckmark;
        iconAttributes.path1 = iconPathCheckmark;
        iconAttributes.viewBox1 = iconViewBoxCheckmark;
    }

    if (icon2 == "locked") {
        iconAttributes.title2 = iconTitleLocked;
        iconAttributes.path2 = iconPathLocked;
        iconAttributes.viewBox2 = iconViewBoxLocked;
    } else if (icon2 == "arrowhead-forward") {
        iconAttributes.title2 = iconTitleArrowForward;
        iconAttributes.path2 = iconPathArrowForward;
        iconAttributes.viewBox2 = iconViewBoxArrowForward;
    } else if (icon2 == "clock") {
        iconAttributes.title2 = iconTitleClock;
        iconAttributes.path2 = iconPathClock;
        iconAttributes.viewBox2 = iconViewBoxClock;
    } else if (icon2 == "exclamation-mark") {
        iconAttributes.title2 = iconTitleExclamationMark;
        iconAttributes.path2 = iconPathExclamationMark;
        iconAttributes.viewBox2 = iconViewBoxExclamationMark;
    } else if (icon2 == "checkmark") {
        iconAttributes.title2 = iconTitleCheckmark;
        iconAttributes.path2 = iconPathCheckmark;
        iconAttributes.viewBox2 = iconViewBoxCheckmark;
    }

    if (icon3 == "locked") {
        iconAttributes.title3 = iconTitleLocked;
        iconAttributes.path3 = iconPathLocked;
        iconAttributes.viewBox3 = iconViewBoxLocked;
    } else if (icon3 == "arrowhead-forward") {
        iconAttributes.title3 = iconTitleArrowForward;
        iconAttributes.path3 = iconPathArrowForward;
        iconAttributes.viewBox3 = iconViewBoxArrowForward;
    } else if (icon3 == "clock") {
        iconAttributes.title3 = iconTitleClock;
        iconAttributes.path3 = iconPathClock;
        iconAttributes.viewBox3 = iconViewBoxClock;
    } else if (icon3 == "exclamation-mark") {
        iconAttributes.title3 = iconTitleExclamationMark;
        iconAttributes.path3 = iconPathExclamationMark;
        iconAttributes.viewBox3 = iconViewBoxExclamationMark;
    } else if (icon3 == "checkmark") {
        iconAttributes.title3 = iconTitleCheckmark;
        iconAttributes.path3 = iconPathCheckmark;
        iconAttributes.viewBox3 = iconViewBoxCheckmark;
    }

    if (icon4 == "locked") {
        iconAttributes.title4 = iconTitleLocked;
        iconAttributes.path4 = iconPathLocked;
        iconAttributes.viewBox4 = iconViewBoxLocked;
    } else if (icon4 == "arrowhead-forward") {
        iconAttributes.title4 = iconTitleArrowForward;
        iconAttributes.path4 = iconPathArrowForward;
        iconAttributes.viewBox4 = iconViewBoxArrowForward;
    } else if (icon4 == "clock") {
        iconAttributes.title4 = iconTitleClock;
        iconAttributes.path4 = iconPathClock;
        iconAttributes.viewBox4 = iconViewBoxClock;
    } else if (icon4 == "exclamation-mark") {
        iconAttributes.title4 = iconTitleExclamationMark;
        iconAttributes.path4 = iconPathExclamationMark;
        iconAttributes.viewBox4 = iconViewBoxExclamationMark;
    } else if (icon4 == "checkmark") {
        iconAttributes.title4 = iconTitleCheckmark;
        iconAttributes.path4 = iconPathCheckmark;
        iconAttributes.viewBox4 = iconViewBoxCheckmark;
    }

    if (icon5 == "locked") {
        iconAttributes.title5 = iconTitleLocked;
        iconAttributes.path5 = iconPathLocked;
        iconAttributes.viewBox5 = iconViewBoxLocked;
    } else if (icon5 == "arrowhead-forward") {
        iconAttributes.title5 = iconTitleArrowForward;
        iconAttributes.path5 = iconPathArrowForward;
        iconAttributes.viewBox5 = iconViewBoxArrowForward;
    } else if (icon5 == "clock") {
        iconAttributes.title5 = iconTitleClock;
        iconAttributes.path5 = iconPathClock;
        iconAttributes.viewBox5 = iconViewBoxClock;
    } else if (icon5 == "exclamation-mark") {
        iconAttributes.title5 = iconTitleExclamationMark;
        iconAttributes.path5 = iconPathExclamationMark;
        iconAttributes.viewBox5 = iconViewBoxExclamationMark;
    } else if (icon5 == "checkmark") {
        iconAttributes.title5 = iconTitleCheckmark;
        iconAttributes.path5 = iconPathCheckmark;
        iconAttributes.viewBox5 = iconViewBoxCheckmark;
    }

    return (
        <ul class="made-c-overflow-menu made-u-width-100">
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    <div>
                        <div class="made-u-margin-bottom-2-x">
                            <strong>{label1}</strong>
                        </div>
                        <div>{description1}</div>
                    </div>
                    {icon1 != "" && (
                        <svg
                            width="16"
                            height="16"
                            viewBox={`${iconAttributes.viewBox1}`}
                            class="made-c-overflow-menu__icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{iconAttributes.title1}</title>
                            <path
                                d={`${iconAttributes.path1}`}
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        </svg>
                    )}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    <div>
                        <div class="made-u-margin-bottom-2-x">
                            <strong>{label2}</strong>
                        </div>
                        <div>{description2}</div>
                    </div>
                    {icon2 != "" && (
                        <svg
                            width="16"
                            height="16"
                            viewBox={`${iconAttributes.viewBox2}`}
                            class="made-c-overflow-menu__icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{iconAttributes.title2}</title>
                            <path
                                d={`${iconAttributes.path2}`}
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        </svg>
                    )}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    <div>
                        <div class="made-u-margin-bottom-2-x">
                            <strong>{label3}</strong>
                        </div>
                        <div>{description3}</div>
                    </div>
                    {icon3 != "" && (
                        <svg
                            width="16"
                            height="16"
                            viewBox={`${iconAttributes.viewBox3}`}
                            class="made-c-overflow-menu__icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{iconAttributes.title3}</title>
                            <path
                                d={`${iconAttributes.path3}`}
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        </svg>
                    )}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    <div>
                        <div class="made-u-margin-bottom-2-x">
                            <strong>{label4}</strong>
                        </div>
                        <div>{description4}</div>
                    </div>
                    {icon4 != "" && (
                        <svg
                            width="16"
                            height="16"
                            viewBox={`${iconAttributes.viewBox4}`}
                            class="made-c-overflow-menu__icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{iconAttributes.title4}</title>
                            <path
                                d={`${iconAttributes.path4}`}
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        </svg>
                    )}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    <div>
                        <div class="made-u-margin-bottom-2-x">
                            <strong>{label5}</strong>
                        </div>
                        <div>{description5}</div>
                    </div>
                    {icon5 != "" && (
                        <svg
                            width="16"
                            height="16"
                            viewBox={`${iconAttributes.viewBox5}`}
                            class="made-c-overflow-menu__icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{iconAttributes.title5}</title>
                            <path
                                d={`${iconAttributes.path5}`}
                                fill="currentColor"
                                fill-rule="evenodd"
                            />
                        </svg>
                    )}
                </a>
            </li>
        </ul>
    );
};

OverflowMenuMultilineIcon.propTypes = {
    label1: PropTypes.objectOf(PropTypes.string),
    description1: PropTypes.objectOf(PropTypes.string),
    icon1: PropTypes.oneOf([
        "locked",
        "arrowhead-forward",
        "clock",
        "exclamation-mark",
        "checkmark",
    ]),
    label2: PropTypes.objectOf(PropTypes.string),
    description2: PropTypes.objectOf(PropTypes.string),
    icon2: PropTypes.oneOf([
        "locked",
        "arrowhead-forward",
        "clock",
        "exclamation-mark",
        "checkmark",
    ]),
    label3: PropTypes.objectOf(PropTypes.string),
    description3: PropTypes.objectOf(PropTypes.string),
    icon3: PropTypes.oneOf([
        "locked",
        "arrowhead-forward",
        "clock",
        "exclamation-mark",
        "checkmark",
    ]),
    label4: PropTypes.objectOf(PropTypes.string),
    description4: PropTypes.objectOf(PropTypes.string),
    icon4: PropTypes.oneOf([
        "locked",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
    label5: PropTypes.objectOf(PropTypes.string),
    description5: PropTypes.objectOf(PropTypes.string),
    icon5: PropTypes.oneOf([
        "locked",
        "arrowhead-forward",
        "clock",
        "exclamation-mark",
        "checkmark",
    ]),
};

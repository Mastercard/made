import React from "react";
import PropTypes from "prop-types";

export const OverflowMenuIcons = ({
    align,
    label1,
    icon1,
    label2,
    icon2,
    label3,
    icon3,
    label4,
    icon4,
    label5,
    icon5,
}) => {
    let isAlignLeft = true;

    if (align == "right") {
        isAlignLeft = false;
    }

    const iconAttributes = {
        title1: "",
        path1: "",
        title2: "",
        path2: "",
        title3: "",
        path3: "",
        title4: "",
        path4: "",
        title5: "",
        path5: "",
    };

    let iconTitleIdea = "Idea";
    let iconPathIdea = "M15 18v5H9v-5h6zm-1 3h-4v1h4v-1zm0-2h-4v1h4v-1zM12 2c3.86 0 7 3.18 7 7.088a7.123 7.123 0 0 1-2.428 5.366C15.235 15.623 15 16.207 15 17h-1c0-1.215.483-2.047 1.914-3.298A6.123 6.123 0 0 0 18 9.088C18 5.731 15.309 3 12 3S6 5.731 6 9.088c0 1.773.76 3.455 2.086 4.614C9.517 14.953 10 15.785 10 17H9c0-.793-.235-1.377-1.572-2.546A7.12 7.12 0 0 1 5 9.088C5 5.18 8.14 2 12 2z";
    
    let iconTitleWallet = "Wallet";
    let iconPathWallet = "M22 6h-1V4.5c0-.827-.673-1.5-1.5-1.5H3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h19c.551 0 1-.448 1-1V7c0-.552-.449-1-1-1zM3 4h16.5a.5.5 0 0 1 .5.5V6H3a1.001 1.001 0 0 1 0-2zm0 16c-.551 0-1-.448-1-1V6.722c.295.172.634.278 1 .278h19v4h-5.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.122 2.5 2.5 2.5H22v4H3zm19-8v3h-5.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5H22z";

    let iconTitlePiggyBank = "Piggybank";
    let iconPathPiggyBank = "M19 2v4.512c1.137.976 1.99 2.173 2.487 3.488h2.566l-.6 6h-2.177c-.508 1.105-1.288 2.125-2.276 2.978V23h-3.809l-.878-1.755c-1.274.274-2.42.324-3.709.164L9.809 23H6v-3.257c-2.449-1.612-3.915-4.121-3.986-6.792A2.503 2.503 0 0 1 0 10.5V7h1v3.5c0 .669.443 1.23 1.048 1.423C2.526 7.485 6.805 4 12 4c1.081 0 2.146.153 3.173.455A3.504 3.504 0 0 1 18.5 2h.5zm-1 1.052a2.508 2.508 0 0 0-1.964 2.114l-.082.606-.579-.202A10.214 10.214 0 0 0 12 5c-4.962 0-9 3.477-9 7.75 0 2.482 1.407 4.836 3.763 6.294L7 19.19V22h2.191l.843-1.686.361.056c1.446.224 2.653.163 4.07-.185l.388-.096.956 1.911H18v-3.491l.182-.15c1.042-.855 1.838-1.908 2.302-3.047l.127-.312h1.936l.4-4H20.77l-.112-.345c-.436-1.339-1.292-2.557-2.474-3.522L18 6.983zM17 9a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2zm-7-1.715a7.404 7.404 0 0 1 4-.004v1.05a6.38 6.38 0 0 0-3.854-.052L10 8.324z";

    let iconTitleTheatre = "Theatre";
    let iconPathTheatre = "M7.44 3.816A18.723 18.723 0 0 1 22.147.514a.6.6 0 0 1 .468.446l.151.614c.85 3.41 1.908 7.654-.372 11.784a6.578 6.578 0 0 1-7.085 3.31 11.419 11.419 0 0 1-3.6 5.201 6.661 6.661 0 0 1-4.18 1.483c-.363 0-.725-.03-1.083-.09a6.637 6.637 0 0 1-4.526-3.04C-.574 16.22.252 11.924.917 8.473l.117-.604a.6.6 0 0 1 .442-.48 18.625 18.625 0 0 1 6.256-.48c-.15-.639-.27-1.26-.39-1.868L7.2 4.418a.6.6 0 0 1 .24-.602zm7.903 6.864a17.52 17.52 0 0 0-13.2-2.22h.001l-.046.24c-.626 3.245-1.401 7.286.85 10.886a5.397 5.397 0 0 0 8.008 1.347c3.302-2.668 3.888-6.737 4.351-10.013zM4.656 15.281a.6.6 0 0 1 .741.413 2.53 2.53 0 0 0 4.512.758.6.6 0 0 1 .985.686 3.762 3.762 0 0 1-3.68 1.548 3.75 3.75 0 0 1-2.97-2.663.6.6 0 0 1 .412-.742zM21.543 1.628a17.515 17.515 0 0 0-13.07 2.94h.002l.048.24c.141.732.292 1.486.48 2.258.886.142 1.76.347 2.618.614a1.802 1.802 0 0 1 3.559-.523.6.6 0 1 1-1.171.264.6.6 0 0 0-.72-.456.603.603 0 0 0-.457.72c.03.13.014.264-.043.384a18.576 18.576 0 0 1 3.454 1.762V9.83l.134-.036a3.756 3.756 0 0 1 3.758 1.347.599.599 0 1 1-.945.74 2.544 2.544 0 0 0-2.551-.915l-.12.03-.015.101a34.641 34.641 0 0 1-.841 4.417 5.397 5.397 0 0 0 5.68-2.741c2.052-3.713 1.056-7.702.26-10.905zM8.736 13.53a1.806 1.806 0 0 1 2.076-1.478 1.806 1.806 0 0 1 1.49 2.069.602.602 0 0 1-.59.5.609.609 0 0 1-.101 0 .601.601 0 0 1-.492-.693.608.608 0 1 0-1.2-.198.598.598 0 0 1-1.085.253.6.6 0 0 1-.098-.453zm-4.831-.811a1.807 1.807 0 1 1 3.566.588.6.6 0 0 1-.59.5.609.609 0 0 1-.101 0 .601.601 0 0 1-.492-.692.608.608 0 1 0-1.2-.2.601.601 0 0 1-.693.504.598.598 0 0 1-.49-.7zm13.307-7.826a1.802 1.802 0 0 1 2.799 1.084.6.6 0 1 1-1.171.262.601.601 0 0 0-1.097-.19.597.597 0 0 0-.079.454.6.6 0 0 1-1.172.262 1.803 1.803 0 0 1 .72-1.872z";

    let iconTitleArrowRight = "Arrow right";
    let iconPathArrowRight = "M19.5 1C21.43 1 23 2.57 23 4.5v15c0 1.93-1.57 3.5-3.5 3.5H12v-1h7.5c1.378 0 2.5-1.121 2.5-2.5v-15C22 3.121 20.878 2 19.5 2H12V1zm-8.146 4.126 6.363 6.363-6.363 6.365-.708-.708L15.793 12H2v-1h13.814l-5.168-5.167.708-.707z";

    if (icon1 == "idea") {
        iconAttributes.title1 = iconTitleIdea;
        iconAttributes.path1 = iconPathIdea
    } else if (icon1 == "wallet") {
        iconAttributes.title1 = iconTitleTheatre;
        iconAttributes.path1 = iconPathTheatre;
    } else if (icon1 == "piggybank") {
        iconAttributes.title1 = iconTitlePiggyBank;
        iconAttributes.path1 = iconPathPiggyBank;
    } else if (icon1 == "theatre") {
        iconAttributes.title1 = iconTitleTheatre;
        iconAttributes.path1 = iconPathTheatre;
    } else if (icon1 == "arrow-right") {
        iconAttributes.title1 = iconTitleArrowRight;
        iconAttributes.path1 = iconPathArrowRight;
    }

    if (icon2 == "idea") {
        iconAttributes.title2 = iconTitleIdea;
        iconAttributes.path2 = iconPathIdea
    } else if (icon2 == "wallet") {
        iconAttributes.title2 = iconTitleTheatre;
        iconAttributes.path2 = iconPathTheatre;
    } else if (icon2 == "piggybank") {
        iconAttributes.title2 = iconTitlePiggyBank;
        iconAttributes.path2 = iconPathPiggyBank;
    } else if (icon2 == "theatre") {
        iconAttributes.title2 = iconTitleTheatre;
        iconAttributes.path2 = iconPathTheatre;
    } else if (icon2 == "arrow-right") {
        iconAttributes.title2 = iconTitleArrowRight;
        iconAttributes.path2 = iconPathArrowRight;
    }

    if (icon3 == "idea") {
        iconAttributes.title3 = iconTitleIdea;
        iconAttributes.path3 = iconPathIdea
    } else if (icon3 == "wallet") {
        iconAttributes.title3 = iconTitleTheatre;
        iconAttributes.path3 = iconPathTheatre;
    } else if (icon3 == "piggybank") {
        iconAttributes.title3 = iconTitlePiggyBank;
        iconAttributes.path3 = iconPathPiggyBank;
    } else if (icon3 == "theatre") {
        iconAttributes.title3 = iconTitleTheatre;
        iconAttributes.path3 = iconPathTheatre;
    } else if (icon3 == "arrow-right") {
        iconAttributes.title3 = iconTitleArrowRight;
        iconAttributes.path3 = iconPathArrowRight;
    }

    if (icon4 == "idea") {
        iconAttributes.title4 = iconTitleIdea;
        iconAttributes.path4 = iconPathIdea
    } else if (icon4 == "wallet") {
        iconAttributes.title4 = iconTitleTheatre;
        iconAttributes.path4 = iconPathTheatre;
    } else if (icon4 == "piggybank") {
        iconAttributes.title4 = iconTitlePiggyBank;
        iconAttributes.path4 = iconPathPiggyBank;
    } else if (icon4 == "theatre") {
        iconAttributes.title4 = iconTitleTheatre;
        iconAttributes.path4 = iconPathTheatre;
    } else if (icon4 == "arrow-right") {
        iconAttributes.title4 = iconTitleArrowRight;
        iconAttributes.path4 = iconPathArrowRight;
    }

    if (icon5 == "idea") {
        iconAttributes.title5 = iconTitleIdea;
        iconAttributes.path5 = iconPathIdea
    } else if (icon5 == "wallet") {
        iconAttributes.title5 = iconTitleTheatre;
        iconAttributes.path5 = iconPathTheatre;
    } else if (icon5 == "piggybank") {
        iconAttributes.title5 = iconTitlePiggyBank;
        iconAttributes.path5 = iconPathPiggyBank;
    } else if (icon5 == "theatre") {
        iconAttributes.title5 = iconTitleTheatre;
        iconAttributes.path5 = iconPathTheatre;
    } else if (icon5 == "arrow-right") {
        iconAttributes.title5 = iconTitleArrowRight;
        iconAttributes.path5 = iconPathArrowRight;
    }

    return (
        <ul class="made-c-overflow-menu made-u-text--right">
            <li class="made-c-overflow-menu__item">
            <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    {isAlignLeft /* if text is left aligned */ ? label1 : ""}
                    {icon1 != "" && (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                    {!isAlignLeft /* if text is right aligned */ ? label1 : ""}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    {isAlignLeft /* if text is left aligned */ ? label2 : ""}
                    {icon2 != "" && (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                    {!isAlignLeft /* if text is right aligned */ ? label2 : ""}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    {isAlignLeft /* if text is left aligned */ ? label3 : ""}
                    {icon3 != "" && (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                    {!isAlignLeft /* if text is right aligned */ ? label3 : ""}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    {isAlignLeft /* if text is left aligned */ ? label4 : ""}
                    {icon4 != "" && (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                    {!isAlignLeft /* if text is right aligned */ ? label4 : ""}
                </a>
            </li>
            <li class="made-c-overflow-menu__item">
                <a 
                    class="made-c-overflow-menu__link" 
                    href=""
                    tabIndex="0"
                >
                    {isAlignLeft /* if text is left aligned */ ? label5 : ""}
                    {icon5 != "" && (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                    {!isAlignLeft /* if text is right aligned */ ? label5 : ""}
                </a>
            </li>
        </ul>
    );
};

OverflowMenuIcons.propTypes = {
    align: PropTypes.oneOf(["left", "right"]),
    label1: PropTypes.objectOf(PropTypes.string),
    icon1: PropTypes.oneOf([
        "idea",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
    label2: PropTypes.objectOf(PropTypes.string),
    icon2: PropTypes.oneOf([
        "idea",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
    label3: PropTypes.objectOf(PropTypes.string),
    icon3: PropTypes.oneOf([
        "idea",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
    label4: PropTypes.objectOf(PropTypes.string),
    icon4: PropTypes.oneOf([
        "idea",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
    label5: PropTypes.objectOf(PropTypes.string),
    icon5: PropTypes.oneOf([
        "idea",
        "wallet",
        "piggybank",
        "theatre",
        "arrow-right",
    ]),
};

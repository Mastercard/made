import React from "react";

export const OverflowMenuMultiline = ({ options, icon }) => {
    let isIcon = false;

    if (icon == true) {
        isIcon = true;
    }

    return (
        <ul class="made-c-overflow-menu made-u-width-100">
            {options != null && Object.keys(options).length > 0 ? (
                Object.keys(options).map((key, index) => (
                    <li class="made-c-overflow-menu__item">
                        <a
                            class="made-c-overflow-menu__link"
                            href=""
                            tabIndex="0"
                        >
                            <div>
                                <div class="made-u-margin-bottom-2-x">
                                    <strong>{[key]}</strong>
                                </div>
                                <div>{options[key]}</div>
                            </div>
                            {isIcon && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.055 4.418a1 1 0 01.277 1.387l-9 13.5a1 1 0 01-1.54.152l-6-6a1 1 0 111.415-1.414l5.138 5.137 8.323-12.485a1 1 0 011.387-.277z" fill="currentColor" />
                                </svg>

                            )}
                        </a>
                    </li>
                ))
            ) : (
                <li class="made-c-overflow-menu__item">
                    <a
                        class="made-c-overflow-menu__link made-c-overflow-menu__link--form"
                        href=""
                        tabIndex="0"
                    >
                        <div class="made-u-margin-bottom-2-x">
                            <strong>Option 1</strong>
                        </div>
                        <div>Description text of this option - single-line</div>
                    </a>
                </li>
            )}
        </ul>
    );
};

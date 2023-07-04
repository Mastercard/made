import React from "react";

export const OverflowMenuMultiline = ({ options }) => {
    return (
        <ul class="made-c-overflow-menu made-u-width-100">
            {options != null && Object.keys(options).length > 0 ? (
                Object.keys(options).map((key, index) => (
                    <li class="made-c-overflow-menu__item">
                        <a
                            class="made-c-overflow-menu__link made-c-overflow-menu__link--form"
                            href=""
                            tabIndex="0"
                        >
                            <div class="made-u-margin-bottom-2-x">
                                <strong>{[key]}</strong>
                            </div>
                            <div>{options[key]}</div>
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

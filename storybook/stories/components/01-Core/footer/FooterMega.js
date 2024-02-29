import React from "react";
import PropTypes from "prop-types";

export const FooterMega = ({
    isLogo,
    titleText,
    navigationLinkText,
    isNavigationLink,
    linkListTitle,
    isLinkListTitle,
    links,
    isLinkList,
    copyrightText,
    isCopyright,
    linkText,
    isLink,
}) => {
    return (
        <footer class="made-c-footer">
            <div class="made-l-grid">
                <div class="made-l-grid__row made-u-flex-space-between">
                    <div class="made-l-grid__item made-l-grid__item--md-6">
                        {isLogo && (
                            <img
                                class="made-u-margin-top-10-x"
                                src="https://made.stage.mastercardlabs.com/images/logo-small.svg"
                                alt="Mastercard logo"
                                width="50"
                                height="30"
                            />
                        )}
                        <p class="made-c-footer__title">{titleText}</p>
                        {isNavigationLink && (
                            <a href="#" class="made-c-footer__link" tabIndex="0">
                                <svg
                                    class="made-u-margin-right-4-x"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>
                                        Icons / Mastercard / Things / help
                                    </title>
                                    <path
                                        d="M12.5 2C6.71 2 2 6.71 2 12.5S6.71 23 12.5 23 23 18.29 23 12.5 18.29 2 12.5 2zm9.37 9h-4.872A4.74 4.74 0 0014 8.003V3.13A9.51 9.51 0 0121.87 11zm.13 1.5c0 .169-.017.333-.025.5h-4.763c.018-.167.05-.329.05-.5 0-.171-.033-.333-.05-.5h4.763c.008.167.025.331.025.5zm-9.5 3.762A3.767 3.767 0 018.738 12.5 3.767 3.767 0 0112.5 8.738a3.767 3.767 0 013.762 3.762 3.767 3.767 0 01-3.762 3.762zM13 3.025v4.763c-.167-.018-.329-.05-.5-.05-.171 0-.333.033-.5.05V3.025c.167-.008.331-.025.5-.025.169 0 .333.017.5.025zm-2 .105v4.872A4.74 4.74 0 008.003 11H3.13A9.51 9.51 0 0111 3.13zM3 12.5c0-.169.017-.333.025-.5h4.763c-.018.167-.05.329-.05.5 0 .171.033.333.05.5H3.025c-.008-.167-.025-.331-.025-.5zm.13 1.5h4.872a4.738 4.738 0 002.997 2.997v4.872A9.507 9.507 0 013.13 14zM12 21.975v-4.763c.167.018.329.05.5.05.171 0 .333-.033.5-.05v4.763c-.167.008-.331.025-.5.025-.169 0-.333-.017-.5-.025zm2-.105v-4.872a4.738 4.738 0 002.997-2.997h4.872A9.507 9.507 0 0114 21.87z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                                {navigationLinkText}
                            </a>
                        )}
                    </div>
                    <div class="made-l-grid__item made-l-grid__item--md-3">
                        {isLinkList && (
                            <nav>
                                <ul class="made-c-footer__navigation">
                                    {isLinkListTitle && (
                                        <li class="made-u-eyebrow--01 made-u-margin-bottom-4-x">
                                            {linkListTitle}
                                        </li>
                                    )}

                                    {links != null && links.length > 0 ? (
                                        links.map(function (label, index) {
                                            return (
                                                <li>
                                                    <a
                                                        class="made-c-footer__link--navigation"
                                                        href="#"
                                                        tabIndex="0"
                                                    >
                                                        {label}
                                                    </a>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <li>
                                            <a
                                                class="made-c-footer__link--navigation"
                                                href="#"
                                            >
                                                Menu Item
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
                <div class="made-l-grid__row">
                    <div class="made-l-grid__item">
                        <ul class="made-c-footer__list made-c-footer__list--mega">
                            {isCopyright && (
                                <li class="made-c-footer__item">
                                    &copy; {copyrightText}
                                </li>
                            )}
                            {isLink && (
                                <li class="made-c-footer__item">
                                    <a href="#" class="made-c-footer__link">
                                        {linkText}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

FooterMega.propTypes = {
    isLogo: PropTypes.bool,
    titleText: PropTypes.string,
    navigationLinkText: PropTypes.string,
    isNavigationLink: PropTypes.bool,
    linkListTitle: PropTypes.string,
    isLinkListTitle: PropTypes.bool,
    links: PropTypes.objectOf(PropTypes.string),
    isLinkList: PropTypes.bool,
    copyrightText: PropTypes.string,
    isCopyright: PropTypes.bool,
    linkText: PropTypes.string,
    isLink: PropTypes.bool,
};

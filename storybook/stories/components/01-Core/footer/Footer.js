import React from "react";
import PropTypes from "prop-types";

export const Footer = ({
	copyrightText,
	isCopyright,
	linkText,
	isLink,
}) => {

	return (
		<footer class="made-c-footer">
			<ul class="made-c-footer__list">
				{isCopyright && (<li class="made-c-footer__item">&copy; {copyrightText}</li>)}
				{isLink && (<li class="made-c-footer__item">
				<a href="#" class="made-c-footer__link">
					{linkText}
				</a>
			</li>)}
			</ul>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
	isCopyright: PropTypes.bool,
	linkText: PropTypes.string,
	isLink: PropTypes.bool,
};
import React from "react";
import PropTypes from "prop-types";

export const FileUpload = ({ fileName, fileSize, actionText, unit }) => {
	return (
		<div class="made-c-file">
			<div class="made-c-file__content">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94-.468-.469.468.468a3.75 3.75 0 105.304 5.304l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94.53.53-.53-.53a3.75 3.75 0 115.303 5.304L9.097 18.835l-.006.006-.009.009-.005.004A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" fill="currentColor" />
				</svg>
				<div class="made-c-file__details">
					<p class="made-c-file__name">{fileName}</p>
					<p class="made-c-file__size">
						{fileSize}
						{unit}
					</p>
				</div>
			</div>
			<div class="made-c-file__action">
				<a href="">
					{actionText}
				</a>
			</div>
		</div>
	);
};

FileUpload.propTypes = {
	fileName: PropTypes.string,
	fileSize: PropTypes.string,
	actionText: PropTypes.string,
	unit: PropTypes.oneOf(["KB", "MB", "GB", "TB"]),
};

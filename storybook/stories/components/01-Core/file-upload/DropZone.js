import React from "react";
import PropTypes from "prop-types";
/* */
export const DropZone = ({ linkText, text }) => {
	return (
		<div class="made-c-file-upload">
			<label class="made-c-file-upload__label" for="file-upload-1">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" fill="#141413" />
				</svg>
				<p class="made-c-file-upload__text">
					{linkText.length > 0 && (
						<span class="made-c-file-upload__link made-u-text-decoration-underline made-u-margin-right-1-x">
							{linkText}
						</span>
					)}
					{text}
				</p>
			</label>
			<input
				class="made-c-file-upload__input"
				id="file-upload-1"
				name="file-upload-1"
				type="file"
			/>
		</div>
	);
};

DropZone.propTypes = {
	linkText: PropTypes.string,
	text: PropTypes.string,
};

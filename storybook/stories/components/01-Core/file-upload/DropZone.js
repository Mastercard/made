import React from "react";
import PropTypes from "prop-types";
/* */
export const DropZone = ({ linkText, text }) => {
	return (
		<div class="made-c-file-upload">
			<label class="made-c-file-upload__label" for="file-upload-1">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>upload</title>
					<path
						d="M24 19.703A4.302 4.302 0 0119.704 24H4.296A4.302 4.302 0 010 19.703v-7.985h1.09v7.985a3.208 3.208 0 003.206 3.206h15.408a3.209 3.209 0 003.205-3.206v-8.235H24v8.235zM18.564 6.75l-.772.772-5.4-5.402v16.515H11.3V2.057L5.836 7.522l-.771-.772L11.815 0l6.749 6.75z"
						fill="currentColor"
						fill-rule="evenodd"
					/>
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

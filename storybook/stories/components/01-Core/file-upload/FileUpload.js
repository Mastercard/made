import React from "react";
import PropTypes from "prop-types";

export const FileUpload = ({ fileName, fileSize, actionText, unit }) => {
	return (
		<div class="made-c-file">
			<div class="made-c-file__content">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="made-u-flex-shrink-0"
				>
					<title>Icons / Mastercard / UI / attach</title>
					<path
						d="M8.257 24H2.625A.625.625 0 012 23.375V17.74c0-.933.363-1.811 1.021-2.471L15.646 2.605a4.036 4.036 0 012.875-1.192c1.085 0 2.106.424 2.875 1.191a4.072 4.072 0 010 5.749L10.482 19.309a2.482 2.482 0 01-1.769.733H6.625A.625.625 0 016 19.417v-2.175c0-.922.374-1.823 1.025-2.475L16.5 5.293l.707.707-9.475 9.475A2.515 2.515 0 007 17.242v1.8h1.713c.4 0 .777-.156 1.061-.439L20.688 7.647a3.07 3.07 0 000-4.336c-1.159-1.158-3.177-1.158-4.335 0L3.729 15.975A2.486 2.486 0 003 17.74V23h5.257c.667 0 1.295-.26 1.768-.732L22 10.293l.707.707-11.975 11.975A3.477 3.477 0 018.257 24z"
						fill="currentColor"
						fill-rule="evenodd"
					/>
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
				<a href="" class="">
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

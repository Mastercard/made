import React from "react";
import PropTypes from "prop-types";

export const Pagination = ({
	placeholder,
	totalPages,
	displayText,
}) => {

	return (
		<div class="made-c-pagination">
			<div class="made-c-pagination__controls">
				<button type="button" class="made-c-pagination__button">
					<svg
						width="20"
						height="24"
						class="made-c-pagination__icon"
						viewBox="0 0 20 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>pagination - first</title>
						<path
							d="M19.879 0v24L6.545 12 19.88 0zM2.182 0v24H0V0h2.182z"
							fill="currentColor"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
				<button type="button" class="made-c-pagination__button">
					<svg
						width="14"
						height="24"
						class="made-c-pagination__icon"
						viewBox="0 0 14 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>pagination - previous</title>
						<path
							d="M0 12l13.333 12V0z"
							fill="currentColor"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
				<label
					for="page"
					class="made-c-form__label made-c-form__label--pagination"
				>
					Page
				</label>
				<input
					type="text"
					id="page"
					name="page"
					class="made-c-text-input made-c-pagination__input"
					placeholder={placeholder}
				/>
				<span class="made-c-pagination__item"> of {totalPages} </span>
				<button
					type="button"
					class="made-c-pagination__button made-u-margin-left-4-x"
				>
					<svg
						width="14"
						height="24"
						class="made-c-pagination__icon"
						viewBox="0 0 14 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>pagination - next</title>
						<path
							d="M13.333 12L0 24V0z"
							fill="currentColor"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
				<button type="button" class="made-c-pagination__button">
					<svg
						width="20"
						height="24"
						class="made-c-pagination__icon"
						viewBox="0 0 20 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>pagination - last</title>
						<path
							d="M0 0v24l13.333-12L0 0zm17.697 0v24h2.182V0h-2.182z"
							fill="currentColor"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div class="made-c-pagination__count made-u-margin-left-2-x--md">
				{displayText}
			</div>
		</div>
	);
};

Pagination.propTypes = {
	placeholder: PropTypes.string,
	totalPages: PropTypes.string,
	displayText: PropTypes.string,
};

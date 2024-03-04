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
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<button type="button" class="made-c-pagination__button">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.75 19.5L8.25 12l7.5-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<button type="button" class="made-c-pagination__button">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="made-c-pagination__count made-u-margin-left--md-2-x">
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

import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";

const Input = forwardRef(({ dateFormat, label, value, onClick }, ref) => {
	return (
		<>
			<div class="made-c-form__element">
				<label for="default" class="made-c-form__label">
					{label}
				</label>
				<div class="made-c-text-input__wrapper">
					<input
						type="text"
						id="default"
						name="default"
						class="made-c-text-input"
						value={value}
						placeholder={dateFormat.toUpperCase()}
						onClick={onClick}
						ref={ref}
						autocomplete="off"
					/>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-c-select__arrow">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.875C5.97018 1.875 6.25 2.15482 6.25 2.5V3.75H13.75V2.5C13.75 2.15482 14.0298 1.875 14.375 1.875C14.7202 1.875 15 2.15482 15 2.5V3.75H15.625C17.0057 3.75 18.125 4.86929 18.125 6.25V15.625C18.125 17.0057 17.0057 18.125 15.625 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.25C1.875 4.86929 2.99429 3.75 4.375 3.75H5V2.5C5 2.15482 5.27982 1.875 5.625 1.875ZM4.375 5C3.68464 5 3.125 5.55964 3.125 6.25V7.20946C3.49272 6.99674 3.91964 6.875 4.375 6.875H15.625C16.0804 6.875 16.5073 6.99674 16.875 7.20946V6.25C16.875 5.55964 16.3154 5 15.625 5H4.375ZM16.875 9.375C16.875 8.68464 16.3154 8.125 15.625 8.125H4.375C3.68464 8.125 3.125 8.68464 3.125 9.375V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H15.625C16.3154 16.875 16.875 16.3154 16.875 15.625V9.375ZM9.375 10.625C9.375 10.2798 9.65482 10 10 10H10.0062C10.3514 10 10.6312 10.2798 10.6312 10.625V10.6312C10.6312 10.9764 10.3514 11.2562 10.0062 11.2562H10C9.65482 11.2562 9.375 10.9764 9.375 10.6312V10.625ZM11.25 10.625C11.25 10.2798 11.5298 10 11.875 10H11.8812C12.2264 10 12.5062 10.2798 12.5062 10.625V10.6312C12.5062 10.9764 12.2264 11.2562 11.8812 11.2562H11.875C11.5298 11.2562 11.25 10.9764 11.25 10.6312V10.625ZM13.125 10.625C13.125 10.2798 13.4048 10 13.75 10H13.7562C14.1014 10 14.3812 10.2798 14.3812 10.625V10.6312C14.3812 10.9764 14.1014 11.2562 13.7562 11.2562H13.75C13.4048 11.2562 13.125 10.9764 13.125 10.6312V10.625ZM5.625 12.5C5.625 12.1548 5.90482 11.875 6.25 11.875H6.25625C6.60143 11.875 6.88125 12.1548 6.88125 12.5V12.5062C6.88125 12.8514 6.60143 13.1312 6.25625 13.1312H6.25C5.90482 13.1312 5.625 12.8514 5.625 12.5062V12.5ZM7.5 12.5C7.5 12.1548 7.77982 11.875 8.125 11.875H8.13125C8.47643 11.875 8.75625 12.1548 8.75625 12.5V12.5062C8.75625 12.8514 8.47643 13.1312 8.13125 13.1312H8.125C7.77982 13.1312 7.5 12.8514 7.5 12.5062V12.5ZM9.375 12.5C9.375 12.1548 9.65482 11.875 10 11.875H10.0062C10.3514 11.875 10.6312 12.1548 10.6312 12.5V12.5062C10.6312 12.8514 10.3514 13.1312 10.0062 13.1312H10C9.65482 13.1312 9.375 12.8514 9.375 12.5062V12.5ZM11.25 12.5C11.25 12.1548 11.5298 11.875 11.875 11.875H11.8812C12.2264 11.875 12.5062 12.1548 12.5062 12.5V12.5062C12.5062 12.8514 12.2264 13.1312 11.8812 13.1312H11.875C11.5298 13.1312 11.25 12.8514 11.25 12.5062V12.5ZM13.125 12.5C13.125 12.1548 13.4048 11.875 13.75 11.875H13.7562C14.1014 11.875 14.3812 12.1548 14.3812 12.5V12.5062C14.3812 12.8514 14.1014 13.1312 13.7562 13.1312H13.75C13.4048 13.1312 13.125 12.8514 13.125 12.5062V12.5ZM5.625 14.375C5.625 14.0298 5.90482 13.75 6.25 13.75H6.25625C6.60143 13.75 6.88125 14.0298 6.88125 14.375V14.3812C6.88125 14.7264 6.60143 15.0062 6.25625 15.0062H6.25C5.90482 15.0062 5.625 14.7264 5.625 14.3812V14.375ZM7.5 14.375C7.5 14.0298 7.77982 13.75 8.125 13.75H8.13125C8.47643 13.75 8.75625 14.0298 8.75625 14.375V14.3812C8.75625 14.7264 8.47643 15.0062 8.13125 15.0062H8.125C7.77982 15.0062 7.5 14.7264 7.5 14.3812V14.375ZM9.375 14.375C9.375 14.0298 9.65482 13.75 10 13.75H10.0062C10.3514 13.75 10.6312 14.0298 10.6312 14.375V14.3812C10.6312 14.7264 10.3514 15.0062 10.0062 15.0062H10C9.65482 15.0062 9.375 14.7264 9.375 14.3812V14.375ZM11.25 14.375C11.25 14.0298 11.5298 13.75 11.875 13.75H11.8812C12.2264 13.75 12.5062 14.0298 12.5062 14.375V14.3812C12.5062 14.7264 12.2264 15.0062 11.8812 15.0062H11.875C11.5298 15.0062 11.25 14.7264 11.25 14.3812V14.375Z" fill="currentColor" />
					</svg>
				</div>
			</div>
		</>
	);
});

const Hint = ({ showHint, hint }) => {
	if (!showHint) {
		return null;
	}
	return (
		<div class="react-datepicker__footer">
			<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="made-u-margin-right-2-x">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.625C6.20304 3.625 3.125 6.70304 3.125 10.5C3.125 14.297 6.20304 17.375 10 17.375C13.797 17.375 16.875 14.297 16.875 10.5C16.875 6.70304 13.797 3.625 10 3.625ZM1.875 10.5C1.875 6.01269 5.51269 2.375 10 2.375C14.4873 2.375 18.125 6.01269 18.125 10.5C18.125 14.9873 14.4873 18.625 10 18.625C5.51269 18.625 1.875 14.9873 1.875 10.5ZM9.375 7.375C9.375 7.02982 9.65482 6.75 10 6.75H10.0062C10.3514 6.75 10.6312 7.02982 10.6312 7.375V7.38125C10.6312 7.72643 10.3514 8.00625 10.0062 8.00625H10C9.65482 8.00625 9.375 7.72643 9.375 7.38125V7.375ZM9.13007 9.2987C10.0853 8.8211 11.1608 9.68384 10.9018 10.7199L10.3109 13.0833L10.3455 13.066C10.6542 12.9116 11.0296 13.0367 11.184 13.3455C11.3384 13.6542 11.2133 14.0296 10.9045 14.184L10.8699 14.2013C9.91475 14.6789 8.83923 13.8162 9.09824 12.7801L9.68908 10.4167L9.65451 10.434C9.34577 10.5884 8.97035 10.4632 8.81598 10.1545C8.66161 9.84577 8.78675 9.47035 9.09549 9.31598L9.13007 9.2987Z" fill="currentColor" />
			</svg>
			<div>{hint}</div>
		</div>
	);
};

export const DateInline = ({ showHint, hint }) => {
	const dateToday = new Date();
	const [startDate, setStartDate] = useState(dateToday);
	return (
		<ReactDatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			dateFormat="dd MM yyyy"
			showMonthDropdown
			showYearDropdown
			dropdownMode="scroll"
			inline
			children={<Hint showHint={showHint} hint={hint} />}
		/>
	);
};

export const DatePicker = ({ label, dateFormat, showHint, hint }) => {
	const [startDate, setStartDate] = useState(null);
	return (
		<ReactDatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			dateFormat={dateFormat.replace("mm", "MM")}
			customInput={<Input label={label} dateFormat={dateFormat} />}
			showMonthDropdown
			showYearDropdown
			dropdownMode="scroll"
			placeholderText={dateFormat}
			children={<Hint showHint={showHint} hint={hint} />}
			startOpen
		/>
	);
};

export const DateRange = ({
	label,
	dateFormat,
	showHintDateFrom,
	showHintDateTo,
	hint,
}) => {
	const dateToday = new Date(),
		dateFuture = new Date();
	const [startDate, setStartDate] = useState(dateToday);
	const [endDate, setEndDate] = useState(
		dateFuture.setDate(dateFuture.getDate() + 5)
	);
	return (
		<>
			<ReactDatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				dateFormat={dateFormat.replace("mm", "MM")}
				customInput={<Input label={label} dateFormat={dateFormat} />}
				showMonthDropdown
				showYearDropdown
				dropdownMode="scroll"
				selectsStart
				startDate={startDate}
				endDate={endDate}
				placeholderText={dateFormat}
				yearItemNumber={5}
				startOpen
				children={<Hint showHint={showHintDateFrom} hint={hint} />}
			/>
			<ReactDatePicker
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				dateFormat={dateFormat.replace("mm", "MM")}
				customInput={<Input label={label} dateFormat={dateFormat} />}
				showMonthDropdown
				showYearDropdown
				dropdownMode="scroll"
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
				placeholderText={dateFormat}
				children={<Hint showHint={showHintDateTo} hint={hint} />}
				popperPlacement="bottom-end"
				calendarClassName="date-range"
			/>
		</>
	);
};

DateInline.propTypes = {
	showHint: PropTypes.bool,
	hint: PropTypes.string,
};

DatePicker.propTypes = {
	label: PropTypes.string,
	dateFormat: PropTypes.string,
	showHint: PropTypes.bool,
	hint: PropTypes.string,
};

DatePicker.propTypes = {
	label: PropTypes.string,
	dateFormat: PropTypes.string,
	showHintDateFrom: PropTypes.bool,
	showHintDateTo: PropTypes.bool,
	hint: PropTypes.string,
};

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
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				class="react-datepicker__footer-icon"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>info</title>
				<path
					d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm.5 9v7.5h-1V10h1zm0-3.5v1h-1v-1h1z"
					fill="currentColor"
					fill-rule="evenodd"
				/>
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

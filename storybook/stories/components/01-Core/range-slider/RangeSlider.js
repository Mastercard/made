import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const RangeSlider = ({ label, isDisabled, rangeValue }) => {
	const rangeSlider = useRef(null);
	const input = useRef(null);

	const [value, setValue] = useState(rangeValue); //initial value of range slider is 50

	const updateRangeSlider = (newValue) => {
		let rangeSliderBackgroundColor =
			"var(--made-color-border-default-on-light)";
		let rangeSliderProgressColor = "var(--made-color-background-primary)";
		let rangeSliderValue =
			((newValue - rangeSlider.current.min) /
				(rangeSlider.current.max - rangeSlider.current.min)) *
			100;

		rangeSlider.current.style.background = `linear-gradient(to right, ${rangeSliderProgressColor} 0%, ${rangeSliderProgressColor} ${rangeSliderValue}%, ${rangeSliderBackgroundColor} ${rangeSliderValue}%, ${rangeSliderBackgroundColor}`;
	};

	useEffect(() => {
		updateRangeSlider(value);
	}, [value]);

	useEffect(() => {
		rangeSlider.current.value = rangeValue;
		input.current.value = rangeValue;
		setValue(rangeValue);

		updateRangeSlider(rangeValue);
	}, [rangeValue]);

	const setValueByRangeSlider = () => {
		setValue(rangeSlider.current.value);
	};

	const setValueByInput = () => {
		setValue(input.current.value);
	};

	return (
		<div class="made-c-form__element">
			<div
				className={
					isDisabled
						? "made-c-range-slider made-c-range-slider--disabled"
						: "made-c-range-slider"
				}
			>
				<label class="made-c-range-slider__label" for="range-slider">
					{label}
					{isDisabled}
				</label>
				<div class="made-c-range-slider__wrapper">
					<div class="made-c-range-slider__min-value">0</div>
					<input
						class="made-c-range-slider__range"
						type="range"
						min="0"
						max="100"
						id="range-slider"
						name="range-slider"
						value={value}
						ref={rangeSlider}
						onChange={setValueByRangeSlider}
						disabled={isDisabled}
					/>
					<div class="made-c-range-slider__max-value">100</div>
					<label for="range-slider-input">
						<input
							class="made-c-text-input made-c-text-input--small made-c-text-input--range-slider"
							type="number"
							min="0"
							max="100"
							id="range-slider-input"
							name="range-slider-input"
							value={value}
							ref={input}
							onChange={setValueByInput}
							disabled={isDisabled}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

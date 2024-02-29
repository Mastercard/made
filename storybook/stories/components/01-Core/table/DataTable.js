import React, { useState, useEffect } from "react";

export const DataTable = ({ }) => {
	const [isCheckAll, setIsCheckAll] = useState(false);

	const checkAll = () => {
		setIsCheckAll(!isCheckAll);
	};

	useEffect(() => {
		const tableRows = document.querySelectorAll(".dataTableDemo tbody tr");
		const checkBoxes = document.querySelectorAll(
			".dataTableDemo tbody .made-c-checkbox"
		);
		if (isCheckAll) {
			tableRows.forEach(function (tableRow) {
				tableRow.classList.add("made-c-table--selected-row");
			});
			checkBoxes.forEach(function (checkBox) {
				checkBox.checked = true;
			});
		} else {
			tableRows.forEach(function (tableRow) {
				tableRow.classList.remove("made-c-table--selected-row");
			});
			checkBoxes.forEach(function (checkBox) {
				checkBox.checked = false;
			});
		}
	}, [isCheckAll]);

	const selected = (element) => {
		element.currentTarget
			.closest("tr")
			.classList.toggle("made-c-table--selected-row");
	};

	return (
		<div class="made-c-table--responsive">
			<table class="made-c-table">
				<thead>
					<tr>
						<th scope="col" class="made-u-width-17-x">
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-1"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-1"
								checked={isCheckAll}
								onClick={checkAll}
							></label>
						</th>
						<th scope="col" class="made-c-table__header--sortable">
							<button type="button" class="made-c-button--reset made-c-table__button--resize">
								<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.084 1C12.084 1.55228 11.6363 2 11.084 2C10.5317 2 10.084 1.55228 10.084 1C10.084 0.447715 10.5317 0 11.084 0C11.6363 0 12.084 0.447715 12.084 1ZM12.084 14C12.084 14.5523 11.6363 15 11.084 15C10.5317 15 10.084 14.5523 10.084 14C10.084 13.4477 10.5317 13 11.084 13C11.6363 13 12.084 13.4477 12.084 14ZM11.084 28C11.6363 28 12.084 27.5523 12.084 27C12.084 26.4477 11.6363 26 11.084 26C10.5317 26 10.084 26.4477 10.084 27C10.084 27.5523 10.5317 28 11.084 28Z" fill="#B1ADA6" />
								</svg>
							</button>
							<button class="made-c-button--reset made-c-table__button--sortable">
								Column Head
								<svg class="made-u-margin-left-2-x" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z" fill="currentColor" />
								</svg>
							</button>
						</th>
						<th scope="col">
							<button type="button" class="made-c-button--reset made-c-table__button--resize">
								<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.084 1C12.084 1.55228 11.6363 2 11.084 2C10.5317 2 10.084 1.55228 10.084 1C10.084 0.447715 10.5317 0 11.084 0C11.6363 0 12.084 0.447715 12.084 1ZM12.084 14C12.084 14.5523 11.6363 15 11.084 15C10.5317 15 10.084 14.5523 10.084 14C10.084 13.4477 10.5317 13 11.084 13C11.6363 13 12.084 13.4477 12.084 14ZM11.084 28C11.6363 28 12.084 27.5523 12.084 27C12.084 26.4477 11.6363 26 11.084 26C10.5317 26 10.084 26.4477 10.084 27C10.084 27.5523 10.5317 28 11.084 28Z" fill="#B1ADA6" />
								</svg>
							</button>
							Column 2</th>
						<th scope="col">
							<button type="button" class="made-c-button--reset made-c-table__button--resize">
								<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.084 1C12.084 1.55228 11.6363 2 11.084 2C10.5317 2 10.084 1.55228 10.084 1C10.084 0.447715 10.5317 0 11.084 0C11.6363 0 12.084 0.447715 12.084 1ZM12.084 14C12.084 14.5523 11.6363 15 11.084 15C10.5317 15 10.084 14.5523 10.084 14C10.084 13.4477 10.5317 13 11.084 13C11.6363 13 12.084 13.4477 12.084 14ZM11.084 28C11.6363 28 12.084 27.5523 12.084 27C12.084 26.4477 11.6363 26 11.084 26C10.5317 26 10.084 26.4477 10.084 27C10.084 27.5523 10.5317 28 11.084 28Z" fill="#B1ADA6" />
								</svg>
							</button>Column 3</th>
						<th scope="col">
							<button type="button" class="made-c-button--reset made-c-table__button--resize">
								<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.084 1C12.084 1.55228 11.6363 2 11.084 2C10.5317 2 10.084 1.55228 10.084 1C10.084 0.447715 10.5317 0 11.084 0C11.6363 0 12.084 0.447715 12.084 1ZM12.084 14C12.084 14.5523 11.6363 15 11.084 15C10.5317 15 10.084 14.5523 10.084 14C10.084 13.4477 10.5317 13 11.084 13C11.6363 13 12.084 13.4477 12.084 14ZM11.084 28C11.6363 28 12.084 27.5523 12.084 27C12.084 26.4477 11.6363 26 11.084 26C10.5317 26 10.084 26.4477 10.084 27C10.084 27.5523 10.5317 28 11.084 28Z" fill="#B1ADA6" />
								</svg>
							</button>Status Column</th>
						<th scope="col">
							<button type="button" class="made-c-button--reset made-c-table__button--resize">
								<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.084 1C12.084 1.55228 11.6363 2 11.084 2C10.5317 2 10.084 1.55228 10.084 1C10.084 0.447715 10.5317 0 11.084 0C11.6363 0 12.084 0.447715 12.084 1ZM12.084 14C12.084 14.5523 11.6363 15 11.084 15C10.5317 15 10.084 14.5523 10.084 14C10.084 13.4477 10.5317 13 11.084 13C11.6363 13 12.084 13.4477 12.084 14ZM11.084 28C11.6363 28 12.084 27.5523 12.084 27C12.084 26.4477 11.6363 26 11.084 26C10.5317 26 10.084 26.4477 10.084 27C10.084 27.5523 10.5317 28 11.084 28Z" fill="#B1ADA6" />
								</svg>
							</button>Column 5</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-2"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-2"
								onClick={selected}
							></label>
						</td>
						<td>
							<a href="">joefdoe</a>
						</td>
						<td>Cell Text</td>
						<td>
							<a href="">Clickable item</a>
						</td>
						<td>Approved</td>
						<td>Cell text</td>
					</tr>
					<tr>
						<td>
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-3"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-3"
								onClick={selected}
							></label>
						</td>
						<td>
							<a href="">turnerj1976</a>
						</td>
						<td>Cell Text</td>
						<td>
							<a href="">Clickable item</a>
						</td>
						<td>Rejected</td>
						<td>Cell text</td>
					</tr>
					<tr>
						<td>
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-4"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-4"
								onClick={selected}
							></label>
						</td>
						<td>
							<a href="">emilybrown1</a>
						</td>
						<td>Cell Text</td>
						<td>
							<a href="">Clickable item</a>
						</td>
						<td>Approved</td>
						<td>Cell text</td>
					</tr>
					<tr>
						<td>
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-5"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-5"
								onClick={selected}
							></label>
						</td>
						<td>
							<a href="">woodethan</a>
						</td>
						<td>Cell Text</td>
						<td>
							<a href="">Clickable item</a>
						</td>
						<td>Rejected</td>
						<td>Cell text</td>
					</tr>
					<tr>
						<td>
							<input
								class="made-c-checkbox"
								name="checkbox-01"
								type="checkbox"
								id="checkbox-group-1-6"
								value="1"
							/>
							<label
								class="made-c-checkbox__label"
								for="checkbox-group-1-6"
								onClick={selected}
							></label>
						</td>
						<td>
							<a href="">sdoe123</a>
						</td>
						<td>Cell Text</td>
						<td>
							<a href="">Clickable item</a>
						</td>
						<td>Approved</td>
						<td>Cell text</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

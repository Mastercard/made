import React, { useState, useEffect } from "react";

export const DataTable = ({}) => {
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
							<a href="" class="made-c-table__sort-link">
								Column Head
								<svg
									class="made-c-table__sort-icon"
									width="16"
									height="10"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Sort Column</title>
									<path
										d="M4.537.35v7.645l2.53-2.53.853.852-3.285 3.284-.355-.006-.016-.01h-.606l-.018.01-.36.002L0 6.317l.852-.852 2.53 2.53V.35h1.155Zm6.828-.017.355.007.016.01h.606l.018-.01.36-.002L16 3.618l-.852.852-2.53-2.53v7.645h-1.155V1.939L8.932 4.47l-.853-.852L11.365.333Z"
										fill="currentColor"
										fill-rule="evenodd"
									/>
								</svg>
							</a>
						</th>
						<th scope="col">Column 2</th>
						<th scope="col">Column 3</th>
						<th scope="col">Status Column</th>
						<th scope="col">Column 5</th>
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

import React from "react";

function Filter({ greasedStatus, onGreasedStatus, sortBy, onSortChange }) {
	return (
		<div style={{ margin: "20px" }}>
			<label>greased Hogs </label>
			<input
				type="checkbox"
				checked={greasedStatus}
				onChange={onGreasedStatus}
			/>
			<br />
			<label>sort by</label>
			<select name="sort" value={sortBy} onChange={onSortChange}>
				<option value="name">name</option>
				<option value="weight">weight</option>
			</select>
		</div>
	);
}

export default Filter;

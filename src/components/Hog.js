import React, { useState } from "react";

function Hog({ hog }) {
	const [detailStatus, setDetailStatus] = useState(false);
	//Detail
	function handleDetail() {
		setDetailStatus((prevStatus) => !prevStatus);
	}
	return (
		<div
			onClick={handleDetail}
			className="ui four wide column border"
			style={{ border: "1px pink solid", cursor: "pointer" }}
		>
			<h2>{hog.name}</h2>
			<img src={hog.image} alt={hog.name} width="150px" />
			{detailStatus && (
				<ul>
					<li>specialty: {hog.specialty}</li>
					<li>weight: {hog.weight}</li>
					<li>greased: {hog.greased ? "yes" : "no"}</li>
					<li>highest medal achieved: {hog["highest medal achieved"]}</li>
				</ul>
			)}
		</div>
	);
}

export default Hog;

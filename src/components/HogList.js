import React from "react";
import Hog from "./Hog";

function HogList({ hogs }) {
	return (
		<div className="ui grid container">
			{hogs.map((hog, index) => (
				<Hog hog={hog} key={index} />
			))}
		</div>
	);
}

export default HogList;

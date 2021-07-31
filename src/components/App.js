import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";

function App() {
	const [greasedStatus, setGreasedStatus] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	function handleGreasedStatus() {
		setGreasedStatus((prevStatus) => !prevStatus);
	}
	function handleSortChange(event) {
		setSortBy(event.target.value);
	}
	const displayHog = hogs
		.filter((hog) => (greasedStatus ? hog.greased : true))
		.sort((hogOne, hogTwo) => {
			if (sortBy === "name") {
				return hogOne.name.localeCompare(hogTwo.name);
			} else {
				return hogOne.weight - hogTwo.weight;
			}
		});

	return (
		<div className="App">
			<Nav />
			<Filter
				greasedStatus={greasedStatus}
				sortBy={sortBy}
				onSortChange={handleSortChange}
				onGreasedStatus={handleGreasedStatus}
			/>
			<HogList hogs={displayHog} />
		</div>
	);
}

export default App;

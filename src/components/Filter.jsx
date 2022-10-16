/*
EXTRA CREDIT 2: Filter.jsx
- Has three buttons, “All”, “Active”, and “Completed”
  - Clicking one of the three buttons will filter away
    any todos with a status that doesn’t match the filter.
  - i.e. “All” shows everything, “Active” only shows incomplete, 
    “Completed” only shows complete
    Note: You may need to add state to other parts of the app to get
    this to work - think about how data flows through the app
*/
import React from 'react';

// Button styles used to display if a filter is selected.
const pinkButton = { backgroundColor: 'pink' };
const whiteButton = { backgroundColor: 'white' };

const Filter = ({ selectedFilter, setSelectedFilter }) => {
	return (
		<div className="filter-button-container">
			<button
				className="filter-button"
				style={selectedFilter === 'all' ? pinkButton : whiteButton}
				value="all"
				onClick={(e) => setSelectedFilter(e.target.value)}
			>
				All
			</button>
			<button
				className="filter-button"
				style={selectedFilter === 'active' ? pinkButton : whiteButton}
				value="active"
				onClick={(e) => setSelectedFilter(e.target.value)}
			>
				Active
			</button>
			<button
				className="filter-button"
				style={selectedFilter === 'completed' ? pinkButton : whiteButton}
				value="completed"
				onClick={(e) => setSelectedFilter(e.target.value)}
			>
				Completed
			</button>
		</div>
	);
};
export default Filter;

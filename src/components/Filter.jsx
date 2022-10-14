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

const Filter = () => {
	return (
		<div className="filter-button-container">
			<button> All </button>
			<button> Active </button>
			<button> Completed </button>
		</div>
	);
};
export default Filter;

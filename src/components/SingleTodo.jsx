//  Represents a single Todo item
import React from 'react';

const SingleToDo = ({ todoName }) => {
	return (
		<li>
			<input type="button" className="todoCheckbox" />
			{todoName}
		</li>
	);
};

export default SingleToDo;

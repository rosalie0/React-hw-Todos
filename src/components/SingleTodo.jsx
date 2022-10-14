//  Represents a single Todo item
import React from 'react';

const SingleToDo = ({ todoName }) => {
	function clickToDo() {
		console.log('clicked button!');
	}

	return (
		<div className="single-todo-div">
			<input type="button" className="todoCheckbox" onClick={clickToDo} />
			{todoName}
		</div>
	);
};

export default SingleToDo;

//  Represents a single Todo item
import React, { useState } from 'react';

const strikeStyle = {
	textDecorationLine: 'line-through',
};

const lowerOpacityStyle = {
	opacity: '20%',
};

const SingleToDo = ({ todoName }) => {
	//State of if task completed or not.
	// false = not done. true = done
	const [done, setDone] = useState(false);

	function clickToDo() {
		setDone(!done); //toggle it
	}

	return (
		<div className="single-todo-div" style={done ? lowerOpacityStyle : null}>
			<input
				type="button"
				className="todoCheckbox"
				onClick={clickToDo}
				value={done ? '✔' : ''} //If done, gets a checkmark
			/>
			<div style={done ? strikeStyle : null}>{todoName}</div>
		</div>
	);
};

export default SingleToDo;

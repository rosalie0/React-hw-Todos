import React, { useState } from 'react';

// Styles to decorate a completed task
const strikeStyle = { textDecorationLine: 'line-through' };
const lowerOpacityStyle = { opacity: '20%' };

const SingleToDo = ({ todoName, selectedFilter }) => {
	// State of if task completed or not.
	// false = not done. true = done
	const [done, setDone] = useState(false);

	console.log(selectedFilter);
	function clickToDo() {
		setDone(!done); //toggle it
	}

	// if filter 'active', render components that are done === false
	if (selectedFilter === 'active')
		return done ? (
			''
		) : (
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
	// If filter 'completed', only render if done===true
	else if (selectedFilter === 'completed')
		return done ? (
			<div className="single-todo-div" style={done ? lowerOpacityStyle : null}>
				<input
					type="button"
					className="todoCheckbox"
					onClick={clickToDo}
					value={done ? '✔' : ''} //If done, gets a checkmark
				/>
				<div style={done ? strikeStyle : null}>{todoName}</div>
			</div>
		) : (
			''
		);
	// if filter 'all' (aka not completed or active), render all components
	else
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

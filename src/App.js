import { useState } from 'react';
import './App.css';
import SingleToDo from './components/SingleTodo';
import Filter from './components/Filter';

const dummyData = ['Write a UI', 'Bake cookies', 'Take over the world'];
function App() {
	const [todos, setTodos] = useState(dummyData);

	// Options for Filter: [ All, Active, Completed ]
	const [selectedFilter, setSelectedFilter] = useState('all');

	return (
		<div className="App">
			<header>todos</header>
			<Filter
				selectedFilter={selectedFilter}
				setSelectedFilter={setSelectedFilter}
			/>
			<div className="todo-container">
				{todos.map((todoName) => (
					<SingleToDo key={todoName} todoName={todoName} />
				))}
			</div>
		</div>
	);
}

export default App;

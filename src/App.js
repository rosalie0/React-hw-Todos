import { useState } from 'react';
import './App.css';
import SingleToDo from './components/SingleTodo';

const dummyData = ['Write a UI', 'Bake cookies', 'Take over the world'];
function App() {
	const [todos, setTodos] = useState(dummyData);
	return (
		<div className="App">
			<header>Todo List</header>
			<div className="todo-container">
				<ul>
					{todos.map((todoName) => (
						<SingleToDo key={todoName} todoName={todoName} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;

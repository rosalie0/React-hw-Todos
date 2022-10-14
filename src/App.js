import { useState } from 'react';
import './App.css';
import SingleToDo from './components/SingleTodo';

const dummyData = ['Write a UI', 'Bake cookies', 'Take over the world'];
function App() {
	const [todos, setTodos] = useState(dummyData);
	return (
		<div className="App">
			<header>todos</header>
			<div className="todo-container">
				{todos.map((todoName) => (
					<SingleToDo key={todoName} todoName={todoName} />
				))}
			</div>
		</div>
	);
}

export default App;

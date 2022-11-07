import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';
import TodosActions from './Components/Todos/TodosActions';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodoHandle = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
			)
		);
	};

	const resetTodosHandler = () => {
		setTodos([]);
	};

	const deleteCompleteTodosHandler = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />

			{!!todos.length && (
				<TodosActions
					completedTodosExist={!!completedTodosCount}
					deleteCompleteTodos={deleteCompleteTodosHandler}
					resetTodos={resetTodosHandler}
				/>
			)}

			<TodoList deleteTodo={deleteTodoHandle} todos={todos} toggleTodo={toggleTodoHandler} />

			{completedTodosCount > 0 && (
				<h2>{`You have completed ${completedTodosCount} ${
					completedTodosCount > 1 ? 'todos' : 'todo'
				}`}</h2>
			)}
		</div>
	);
}

export default App;

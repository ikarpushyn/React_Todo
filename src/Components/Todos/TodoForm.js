import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
	const [text, setText] = useState('');

	function onSubmitHandler(e) {
		e.preventDefault();

		if (!text) {
			alert('write smth');
			return;
		}
		addTodo(text);
		setText('');
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler} action="form">
				<input
					type="text"
					name="todoForm"
					value={text}
					placeholder="Enter new todo"
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" title="Submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default TodoForm;

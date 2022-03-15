import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Pray Fajr', completed: true },
		{ id: 2, task: 'Study', completed: false },
		{ id: 3, task: 'workout', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">Todos with hooks</Typography>
				</Toolbar>
			</AppBar>
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;

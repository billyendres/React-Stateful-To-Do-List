import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
	}

	create = newTodo => {
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};

	remove = id => {
		this.setState({
			todos: this.state.todos.filter(t => t.id !== id)
		});
	};

	//Takes todos from handleUpdate and resets value without mutating state
	update = (id, updatedTask) => {
		const updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	toggleCompletion = id => {
		const updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	render() {
		const todos = this.state.todos.map(todo => {
			return (
				<ToDo
					key={todo.id}
					id={todo.id}
					task={todo.task}
					completed={todo.completed}
					removeTodo={this.remove}
					updateTodo={this.update}
					toggleTodo={this.toggleCompletion}
				/>
			);
		});
		return (
			<div>
				<h1>REACT TO DO LIST</h1>
				<ul>{todos}</ul>
				<ToDoForm createTodo={this.create} />
			</div>
		);
	}
}

export default ToDoList;

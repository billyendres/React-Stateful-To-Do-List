import React, { Component } from "react";
import uuid from "uuid";

class ToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
	}

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleSubmit = evt => {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid(), completed: false });
		this.setState({ task: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task" />
				<input
					name="task"
					type="text"
					placeholder="New ToDo"
					id="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add To Do</button>
			</form>
		);
	}
}

export default ToDoForm;

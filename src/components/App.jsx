import React, {Component} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
	state = {
		list: [],
		isEdit: false
	};

	handleSubmit = (input, inputRef) => {
		if (input === "") {
			return;
		}
		this.setState(prev => {
			let list = [...prev.list];
			list[list.length] = input;
			let isEdit = prev.isEdit;
			isEdit && (isEdit = false);
			return {list, isEdit};
		});
		inputRef.focus();
	};

	handleReset = confirm => {
		if (!confirm) {
			return;
		}
		this.input.handleReset();
		this.setState({list: [], isEdit: false});
	};

	handleEdit = (text, id) => {
		this.setState(prev => {
			let list = [...prev.list];
			list.splice(id, 1);
			return {list, isEdit: true};
		});
		this.input.handleEdit(text);
	};

	handleDelete = (id, confirm) => {
		if (!confirm) {
			return;
		}
		this.setState(prev => {
			let list = [...prev.list];
			list.splice(id, 1);
			return {list};
		});
	};

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto col-md-8 mt-4'>
						<h3 className='text-capitalize text-center'>todo input</h3>
						<TodoInput
							handleSubmit={this.handleSubmit}
							ref={ref => (this.input = ref)}
							isEdit={this.state.isEdit}
						/>
						<TodoList
							list={this.state.list}
							handleReset={this.handleReset}
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

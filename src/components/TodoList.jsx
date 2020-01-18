import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	render() {
		const {list, handleDelete, handleEdit, handleReset} = this.props;
		return (
			<ul className='list-group my-5'>
				<h3 className='text-capitalize text-center'>todo list</h3>
				{list.map((e, i) => {
					return (
						<TodoItem
							key={i}
							id={i}
							text={e}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					);
				})}
				<button
					type='button'
					className='btn btn-danger btn-block text-capitalize mt-5'
					onClick={() => {
						if (list.length < 0) {
							return;
						}
						let conf = window.confirm(
							"Are you sure you want to delete all the items?"
						);
						handleReset(conf);
					}}>
					clear list
				</button>
			</ul>
		);
	}
}

export default TodoList;

import React, {Component} from "react";

class TodoItem extends Component {
	state = {
		done: false
	};
	style = {
		cursor: "pointer"
	};

	handleClick = () => {
		this.setState({done: !this.state.done});
	};

	render() {
		const {text, id, handleEdit, handleDelete} = this.props;
		let doneClass;
		this.state.done && (doneClass = "bg-light");
		return (
			<li
				className={`list-group-item text-capitalize d-flex justify-content-between my-2 ${doneClass}`}
				onClick={this.handleClick}>
				<div className='d-flex justify-content-center align-content-center'>
					{this.state.done && <i className='fas fa-check mr-2 my-auto'></i>}
					<h6 className='my-0'>{text}</h6>
				</div>
				<div className='todo-icon'>
					<span
						className='mx-2 text-success icon'
						style={this.style}
						onClick={() => {
							handleEdit(text, id);
						}}>
						<i className='fas fa-pen'></i>
					</span>
					<span
						className='mx-2 text-danger icon'
						style={this.style}
						onClick={() => {
							let conf = window.confirm(
								"Do you really want to delete this item?"
							);
							handleDelete(id, conf);
						}}>
						<i className='fas fa-trash'></i>
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;

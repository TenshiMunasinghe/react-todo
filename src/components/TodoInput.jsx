import React, {Component} from "react";

class TodoInput extends Component {
	state = {
		input: ""
	};

	handleReset = () => {
		this.setState({input: ""});
	};

	handleChange = e => {
		let {value} = e.target;
		this.setState({input: value});
	};

	handleEdit = text => {
		this.setState({input: text});
		this.inputRef.focus();
	};

	render() {
		const {isEdit, handleSubmit} = this.props;
		let btClass;
		let btnText;
		if (isEdit) {
			btClass = "success";
			btnText = "edit";
		} else {
			btClass = "primary";
			btnText = "add item";
		}

		return (
			<div className='card card-body my3'>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleSubmit(this.state.input, this.inputRef);
						this.setState({input: ""});
					}}>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<div
								className={`input-group-text bg-${btClass} text-white text-capitalize`}>
								<i className='fas fa-book'></i>
							</div>
						</div>
						<input
							type='text'
							className='form-control text-capitalize'
							placeholder='add a todo item'
							onChange={this.handleChange}
							value={this.state.input}
							ref={ref => (this.inputRef = ref)}
						/>
					</div>
					<button
						type='submit'
						className={`btn btn-block btn-${btClass} mt-3 text-capitalize`}>
						{btnText}
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;

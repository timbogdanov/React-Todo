import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <form>
        <label htmlFor='todoTask'>Todo Task</label>
        <input
          type='text'
          id='todoTask'
          name='todo'
          onChange={this.handleInput}
          value={this.state.inputValue}
        ></input>

        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;

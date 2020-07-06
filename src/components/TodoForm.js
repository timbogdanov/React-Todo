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

  render() {
    return (
      <form>
        <label htmlFor='todoTask'>Todo Task</label>
        <input type='text' id='todoTask' onChange={this.handleInput}></input>

        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;

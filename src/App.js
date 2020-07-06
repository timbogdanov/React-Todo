import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todosList = [
  {
    task: 'Organize Garage',
    id: 152881707721286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 15288170874358,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 15288170843258,
    completed: false,
  },
  {
    task: 'Bake More Cookies',
    id: 15288137084358,
    completed: false,
  },
  {
    task: 'Message Mark',
    id: 15288217084358,
    completed: false,
  },
  {
    task: 'Slap Mark',
    id: 15288170843518,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosList,
    };
  }

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  removeCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='mainWrapper'>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;

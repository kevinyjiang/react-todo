import React from 'react';
import axios from 'axios';

import InputLine from './InputLine';
import TodoList from './TodoList';

const dbUrl = 'http://localhost:3000/db';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
      .then(response => {
        this.setState({todos: response.data});
      })
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', { task })
      .then(response => {
        this.setState({
          todos: this.state.todos.concat(response.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(id) {
    axios.post(dbUrl + '/remove', { id })
      .then(response => {
        this.setState({
          todos: this.state.todos.filter(todo => todo._id !== id)
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  toggleTodo(id) {
    axios.post(dbUrl + '/toggle', { id })
      .then(response => {
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo._id === id) {
              todo.completed = !todo.completed;
              return todo
            } else {
              return todo;
            }
          })
        })
      });
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) =>
          this.addTodo(task)} />
        <TodoList todoXClick={(id) => this.removeTodo(id)}
          todoItemClick={(id) => this.toggleTodo(id)}
          todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;

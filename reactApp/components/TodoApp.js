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
        this.setState({todos: this.state.todos.concat(response.data)});
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(id) {
    axios.post(dbUrl + '/remove', { id })
      .then(response => {
        this.setState({todos: response.data})
      })

    // const todos = this.state.todos.slice();
    // todos.splice(index, 1)
    // this.setState({
    //   todos: todos
    // })
  }

  toggleTodo(id) {
    axios.post(dbUrl + '/toggle', { id })
      .then(response => {
        this.setState({todos: response.data})
      })

    const todos = this.state.todos.slice();
    todos[index] = {
      taskText: todos[index].taskText,
      completed: !todos[index].completed
    }
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) =>
          this.addTodo(task)} />
        <TodoList todoXClick={(index) =>this.removeTodo(index)}
          todoItemClick={(index) => this.toggleTodo(index)}
          todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;

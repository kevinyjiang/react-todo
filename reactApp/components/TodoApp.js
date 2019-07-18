const dummyData = [
  { taskText: "Catch 'em all", completed: true },
  { taskText: "Build app", completed: false },
  { taskText: "Commit changes", completed: false }
]

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
    this.setState({todos: dummyData})
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', { task })
      .then(response => {
        this.setState({
          todos: this.state.todos.concat(response.data)
        });
        console.log(this.state.todos)
      })
      .catch(error => {
        console.log(error)
      });

    // const todos = this.state.todos.slice();
    // todos.push({
    //   taskText: task,
    //   completed: false
    // });
    //
    // this.setState({todos: todos})
  }

  removeTodo(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }

  toggleTodo(index) {
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

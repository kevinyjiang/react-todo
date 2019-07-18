const dummyData = [
  { taskText: "Catch 'em all", completed: true },
  { taskText: "Build app", completed: false },
  { taskText: "Commit changes", completed: false }
]

import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

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
    dummyData.push({
      taskText: task,
      completed: false
    });

    this.setState({todos: dummyData})
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) => this.addTodo(task)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;

const dummyData = [
  { taskText: "Catch 'em all", completed: true },
  { taskText: "Build app", completed: false },
  { taskText: "Commit changes", completed: false }
]

import React from 'react';
import ReactDOM from 'react-dom';

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

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((item) => <Todo task={item.taskText} completed={item.completed}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <button>X</button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value="task" />
        <button>Add todo</button>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));

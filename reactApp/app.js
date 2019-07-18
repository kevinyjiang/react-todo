const dummyData = ['sleep', 'awake', 'shower', 'eat', 'poop']

import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
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
        {dummyData.map((item) => <Todo task={item} />)}
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
      <li><button>X</button>{this.props.task}</li>
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

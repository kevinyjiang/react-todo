const dummyData = ['sleep', 'awake', 'shower', 'eat', 'poop']

import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<TodoList />,
   document.getElementById('root'));

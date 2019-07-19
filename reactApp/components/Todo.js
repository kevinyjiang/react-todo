import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button onClick={this.props.xClick}>X</button>
        <span onClick={this.props.itemClick}>
          {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
        </span>
      </li>
    );
  }
}

export default Todo;

import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((item) =>
          <Todo key={item._id}
            xClick={() => this.props.todoXClick(item._id)}
            itemClick={() => this.props.todoItemClick(item._id)}
            task={item.taskText}
            completed={item.completed} />
        )}
      </ul>
    );
  }
}

export default TodoList;

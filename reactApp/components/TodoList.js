import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) =>
          <Todo key={item.id}
            xClick={() => this.props.todoXClick(index)}
            itemClick={() => this.props.todoItemClick(index)}
            task={item.taskText}
            completed={item.completed} />
        )}
      </ul>
    )
  }
}

export default TodoList;

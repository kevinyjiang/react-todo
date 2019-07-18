import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value});
  }

  handleSubmit(event) {
    this.props.submit(this.state.typedText);
    this.setState({typedText: ''})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.typedText}
          onChange={(event) => this.handleTyping(event)}/>
        <button onClick={(event) => this.handleSubmit(event)}>Add todo</button>
      </div>
    )
  }
}

export default InputLine;

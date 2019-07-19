import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    };
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value});
  }

  handleSubmit(event) {
    const typedText = this.state.typedText;
    if (typedText.trim() !== '') {
      this.props.submit(this.state.typedText);
      this.setState({typedText: ''});
    } else {
      alert('Cannot add empty task.');
    }
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

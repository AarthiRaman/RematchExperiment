import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="entry-form">
        <button> - </button>
        <input type="text" />
        <span>{0}</span>
        <button> + </button>
      </div>
    );
  }
}

export default Input;
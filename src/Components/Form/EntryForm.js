import React, { Component } from 'react';
import Input from './Input';

class EntryForm extends Component {
  render() {
    return (
      <div className="entry-form">
        <p>Enter the topics that you want to add</p>
        <div className="form-segment">
            <Input />
        </div>
      </div>
    );
  }
}

export default EntryForm;
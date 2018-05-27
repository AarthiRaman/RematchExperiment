import React from 'react';
import Input from './Input';
import './EntryForm.css';

export default function EntryForm({
  form,
  increment,
  updateInput,
  formSubmit,
  updatePriority
}) {
  return (
    <div className="entry-form">
      <p>Enter the topics that you want to add</p>
      {
        form.inputs.length > 0 && <div className="form-segment">
        {
          form.inputs.map((inputValue, i) => <Input priority={inputValue.priority}
            updateInput={updateInput}
            updatePriority={updatePriority}
            segmentNo={i}
          />)
        }
        </div>
      }  
      
      <button onClick={() => increment()}>Add more</button>
      <button onClick={() => formSubmit()}>Submit</button>
    </div>
  );
}
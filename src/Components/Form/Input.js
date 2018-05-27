import React from 'react';

export default function Input({ priority, updateInput, segmentNo, value, updatePriority }) {
  const classPrefix= "entry-form__";

  return <div className={`${classPrefix}input-wrapper`}>
  <input type="text" 
        onChange={(e) => updateInput({
          value: e.target.value, 
          segmentNo
        })}
        value={value}
  />
  { 
    priority > 0 && <div className={`${classPrefix}priority-wrapper`}>
      <span>
          &hearts;
          { (priority - 1 > 0) && priority - 1}
          </span>
      </div>
  }
  
  <button className={`${classPrefix}button`}
          onClick={() => updatePriority({ 
            priority: 1, 
            segmentNo
          })}> &uarr; </button>
          
  <button className={`${classPrefix}button`}
          onClick={() => updatePriority({ 
            priority: -1, 
            segmentNo
          })}> &darr; </button>
  </div>
}

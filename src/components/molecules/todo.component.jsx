import React from 'react';

const Todo = () => {
  return (
    <div className="pl-2 my-2 flex items-center gap-2">
      <input 
        type="checkbox"
        id="todo-item-1"
        className="checked:bg-secondary-200"
      />
      <label
        htmlFor="todo-item-1"
        className="text-grey"
      >
        Something I need to do
      </label>
    </div> 
  );
};

export default Todo;

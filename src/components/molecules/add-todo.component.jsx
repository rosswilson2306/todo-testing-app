import React from 'react';
import AddCircleIcon from '../atoms/svgs/add-circle-icon.component';

const AddTodo = () => {
  return (
    <div className="mb-5 rounded-lg bg-secondary-100 flex h-16 items-center justify-between">
      <input
        type="text"
        className="bg-secondary-100 rounded-l-lg pl-4 h-full w-full"
        placeholder="Add a todo..."
      />
      <button 
        type="button"
        aria-label="Add todo"
        className="text-paper-100 bg-primary-200 h-full p-4 rounded-r-lg"
      >
        <AddCircleIcon classes="h-full w-full" />
      </button>
    </div>
  );
};

export default AddTodo;

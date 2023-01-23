import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodo from './add-todo.component';

describe('Add todo', () => {
  test('should render input', () => {
    render(<AddTodo />);
    const input = screen.getByPlaceholderText(/Add a todo.../);
    expect(input).toBeInTheDocument();
  })
})

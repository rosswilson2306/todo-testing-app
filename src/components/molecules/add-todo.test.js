import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodo from './add-todo.component';

describe('Add todo', () => {
  test('should render input', () => {
    render(<AddTodo />);
    const input = screen.getByPlaceholderText(/Add a todo.../);
    expect(input).toBeInTheDocument();
  });

  test('should render text typed into input', () => {
    render(<AddTodo />);
    const input = screen.getByPlaceholderText(/Add a todo.../);
    fireEvent.change(input, { target: { value: 'Go to the dentist' }});
    expect(input.value).toBe('Go to the dentist');
  });

  test('input value should equal empty string when add button clicked', () => {
    render(<AddTodo />);
    const input = screen.getByPlaceholderText(/Add a todo.../);
    const btn = screen.getByTestId('add-to-do-btn');
    fireEvent.change(input, { target: { value: 'Go to the dentist' }});
    fireEvent.click(btn);
    expect(input.value).toBe('');
  })
})

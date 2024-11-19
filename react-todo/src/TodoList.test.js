import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders the initial list of todos", () => {
    render(<TodoList />);
    const todoItems = screen.getAllByTestId(/todo-item/i); // Ensure the test ID matches your component's markup.
    expect(todoItems.length).toBeGreaterThanOrEqual(1); // Adjust based on initial state.
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByTestId("todo-item-1"); // Replace "todo-item-1" with your dynamic IDs.
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed"); // Ensure completed todos are styled accordingly.
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId("delete-button-1"); // Replace with your button test ID.
    fireEvent.click(deleteButton);
    expect(screen.queryByTestId("todo-item-1")).toBeNull();
  });
});

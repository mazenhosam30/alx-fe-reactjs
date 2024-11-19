import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

test("renders the initial list of todos", () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId("todo-item");
  expect(todoItems.length).toBeGreaterThan(0); // Assuming initial todos exist
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByTestId("todo-item-1"); // Replace with actual test ID logic
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed"); // Assuming completed todos have a specific class
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getByTestId("delete-button-1"); // Replace with actual test ID logic
  fireEvent.click(deleteButton);
  expect(screen.queryByTestId("todo-item-1")).toBeNull();
});

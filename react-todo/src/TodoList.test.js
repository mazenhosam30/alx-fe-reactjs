import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "../TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        fireEvent.change(screen.getByRole("textbox"), { target: { value: "New Todo" } });
        fireEvent.click(screen.getByText("Add Todo"));
        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles a todo's completion", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: line-through");
        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: none");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        fireEvent.click(todo.nextSibling);
        expect(todo).not.toBeInTheDocument();
    });
});

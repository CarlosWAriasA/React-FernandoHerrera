import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tests in TodoItem", () => {
  const todo = {
    id: 1,
    description: "Demo",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the todo pending", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toContain("list-group-item");

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show the todo completed", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span should call the toggleTodo function", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("span should call the deleteTodo function", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});

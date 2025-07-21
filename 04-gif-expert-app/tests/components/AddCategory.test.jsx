import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import React from "react";

describe("Tests in <AddCategory />", () => {
  const onNewCategory = jest.fn();
  test("should change the value of the input", () => {
    const inputValue = "One Punch";
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });
});

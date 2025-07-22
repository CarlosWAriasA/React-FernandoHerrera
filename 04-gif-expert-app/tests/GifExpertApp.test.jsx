import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import React from "react";

describe("Test in GifExpertApp", () => {
  test("should return the initial state", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("should add a new category", () => {
    const inputValue = "Saitama";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole("form"));
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });
});

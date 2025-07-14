import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/components/CounterApp";
import React from "react";

describe("Pruebas en <CounterApp />", () => {
  const value = 100;
  test("should match with the snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the default value of 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("should increment with the +1 button", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test("should decrement with the -1 button", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test("should reset with the reset button", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(value)).toBeTruthy();
  });
});

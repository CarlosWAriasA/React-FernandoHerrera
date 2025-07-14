import { render, screen } from "@testing-library/react";
import FirstApp from "../src/components/FirstApp";
import React from "react";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";

  test("should do match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the title 'Hola, soy Goku'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show the title in an h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show the subtitle send by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getByText(subTitle).innerHTML).toBe(subTitle);
  });
});

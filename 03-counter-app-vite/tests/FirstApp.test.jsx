import { render } from "@testing-library/react";
import FirstApp from "../src/components/FirstApp";
import React from "react";

describe("Pruebas en <FirstApp />", () => {
  //   test("should do match with the snapshot", () => {
  //     const title = "Hola, soy Goku";
  //     const { container } = render(<FirstApp title={title} />);
  //     expect(container).toMatchSnapshot();
  //   });

  test("should show the title in a h1 tag", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show the subtitle send by props", () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getByText(subTitle).innerHTML).toBe(subTitle);
  });
});

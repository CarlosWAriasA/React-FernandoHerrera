import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Tests in <GifItem />", () => {
  const title = "One Punch";
  const url = "https://one-punch.com/img.jpg";

  test("should match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the URL and the ALT", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("should have the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

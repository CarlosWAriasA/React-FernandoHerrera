import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import React from "react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GitGrid />", () => {
  test("should show loading initially", () => {
    const category = "One Punch";
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show the items when the images are loaded", () => {
    const gifs = [
      {
        id: "ABC",
        title: "One Punch",
        url: "https://localhost/one-punch.jpg",
      },
      {
        id: "123",
        title: "One Punch",
        url: "https://localhost/one-punch.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });
    const category = "One Punch";
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

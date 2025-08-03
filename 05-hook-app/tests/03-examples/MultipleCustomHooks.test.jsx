import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Tests in <MultipleCustomHooks />", () => {
  const increment = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment,
    decrement: jest.fn(),
  });
  useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the component by default", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText("Information Pokemon")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Previous" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should show a pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "pikachu",
        sprites: {
          front_default:
            "https://pokeapi.co/api/v2/pokemon/25/front_default.png",
          front_shiny: "https://pokeapi.co/api/v2/pokemon/25/front_shiny.png",
          back_default: "https://pokeapi.co/api/v2/pokemon/25/back_default.png",
          back_shiny: "https://pokeapi.co/api/v2/pokemon/25/back_shiny.png",
        },
        id: 25,
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("#25 - pikachu")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call the function of increment", () => {
    useFetch.mockReturnValue({
      data: {
        name: "pikachu",
        sprites: {
          front_default:
            "https://pokeapi.co/api/v2/pokemon/25/front_default.png",
          front_shiny: "https://pokeapi.co/api/v2/pokemon/25/front_shiny.png",
          back_default: "https://pokeapi.co/api/v2/pokemon/25/back_default.png",
          back_shiny: "https://pokeapi.co/api/v2/pokemon/25/back_shiny.png",
        },
        id: 25,
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    expect(increment).toHaveBeenCalled();
  });
});

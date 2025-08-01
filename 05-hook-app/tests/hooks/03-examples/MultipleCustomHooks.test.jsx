import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";

describe("Tests in <MultipleCustomHooks />", () => {
  test("should show the component by default", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText("Information Pokemon")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });
});

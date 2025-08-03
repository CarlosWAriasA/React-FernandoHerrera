import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("tests in <HomePage />", () => {
  const user = {
    id: 1,
    name: "Carlos",
  };

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain("null");
  });

  test("should show the component wit the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
  });
});

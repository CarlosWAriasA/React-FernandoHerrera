import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("tests in <LoginPage />", () => {
  const user = {
    id: 1,
    name: "Carlos",
  };
  const setUserMock = jest.fn();

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
  });

  test("button should call the setUser function", () => {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalledWith({
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  });
});

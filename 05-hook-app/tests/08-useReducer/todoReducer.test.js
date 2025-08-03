import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Tests in todoReducer", () => {
  const initialState = [{ id: 1, description: "Demo", done: false }];
  test("should return the default state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add a todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New Todo",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
    expect(newState).toEqual([...initialState, action.payload]);
  });

  test("should remove a todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New Todo",
        done: false,
      },
    };
    let newState = todoReducer(initialState, action);
    expect(newState).toContain(action.payload);
    const actionRemove = {
      type: "[TODO] Remove Todo",
      payload: 2,
    };
    newState = todoReducer(newState, actionRemove);
    expect(newState.length).toBe(1);
  });

  test("should toggle a todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});

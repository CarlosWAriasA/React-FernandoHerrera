import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Tests in <useForm />", () => {
  const initialForm = {
    name: "Carlos",
    email: "carlos@gmail.com",
  };
  test("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange, onResetForm, name, email } =
      result.current;

    expect(formState).toEqual(initialForm);
    expect(name).toBe(initialForm.name);
    expect(email).toBe(initialForm.email);
    expect(onInputChange).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });

  test("should change the name of the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newValue = "Juan";
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
  });

  test("should change the email of the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newValue = "juan@gmail.com";
    act(() => {
      onInputChange({ target: { name: "email", value: newValue } });
    });

    expect(result.current.email).toBe(newValue);
  });

  test("should reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const newValue = "juan@gmail.com";
    act(() => {
      onInputChange({ target: { name: "email", value: newValue } });
      onResetForm();
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});

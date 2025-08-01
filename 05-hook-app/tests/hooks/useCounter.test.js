import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Tests inn <useCounter />", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate the counter with a value of 100", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;

    expect(counter).toBe(initialValue);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(counter + 3);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(counter - 1);
  });

  test("should reset the counter", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { reset, decrement } = result.current;

    act(() => {
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});

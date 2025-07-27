import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo = () => {} }) => {
  const { formState, description, onInputChange, onResetForm } = useForm({
    description: "",
    done: false,
    id: new Date().getTime(),
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (description?.trim().length <= 1) return;
    onNewTodo(formState);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        placeholder="Write a todo"
        autoComplete="off"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-2">Add</button>
    </form>
  );
};

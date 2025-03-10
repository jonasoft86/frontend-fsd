import React, { useState } from "react";

import { Button, Form, Input } from "./styles";

import { useAddTodoStore } from "@features/addTodo";

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useAddTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nombre tarea"
      />
      <Button type="submit">Agregar</Button>
    </Form>
  );
};

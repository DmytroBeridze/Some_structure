import styled from "styled-components";
import { useAddTodo } from "../../../hooks/useAddTodo";
import { FormEvent, useState } from "react";
import { Button } from "../../../../../shared/ui/atoms/Button";
import { Input } from "../../../../../shared/ui/atoms/Input";

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 10px;
`;

const Form = () => {
  const [value, setValue] = useState<string>("");
  const { addTodoElement } = useAddTodo();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoElement(value);
  };

  const getValue = (value: string) => {
    setValue(value);
  };

  return (
    <TodoForm onSubmit={submit}>
      <Input getValue={getValue} value={value} label="Enter text" />

      <Button>
        <span>add</span>
      </Button>
    </TodoForm>
  );
};

export default Form;

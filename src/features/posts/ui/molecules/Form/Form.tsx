import styled from "styled-components";
import { Input } from "../../../../../shared/ui/atoms/Input";
import { FormEvent, useState } from "react";
import { Post } from "../../../model/types";
import { Button } from "../../../../../shared/ui/atoms/Button";
import { useAddPost } from "../../../hooks/useAddPost";

const PostForm = styled.form`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const Form = () => {
  const [value, setValue] = useState<string>("");
  const { addNewPost } = useAddPost();
  const getValue = (val: string) => {
    setValue(val);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewPost(value);
  };

  return (
    <PostForm onSubmit={submit}>
      <Input getValue={getValue} value={value} label="Enter text" />
      <Button>
        <span>add</span>
      </Button>
    </PostForm>
  );
};

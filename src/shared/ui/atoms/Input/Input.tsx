import styled from "styled-components";

const MainInput = styled.input`
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
`;

interface InputProps {
  getValue: (value: string) => void;
  value: string;
  label?: string;
}

export const Input = ({ getValue, value, label }: InputProps) => {
  return (
    <Label>
      {label}
      <MainInput onChange={(e) => getValue(e.target.value)} value={value} />
    </Label>
  );
};

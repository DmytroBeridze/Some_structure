import { ReactNode } from "react";
import styled from "styled-components";

const MainButton = styled.button`
  background-color: #0066ff;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
`;

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: string;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return <MainButton onClick={onClick}>{children}</MainButton>;
};

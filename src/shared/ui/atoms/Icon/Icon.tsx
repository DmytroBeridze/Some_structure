import styled from "styled-components";
import { ReactComponent as Delete } from "../../../../assets/icons/garbage-svgrepo-com.svg";

type Name = "delete";

interface IconProps {
  name: Name;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const icons = {
  delete: Delete,
};

export const Icon = ({
  name,
  size,
  onClick,
  color = "currentcolor",
}: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent width={size} height={size} onClick={onClick} />;
};

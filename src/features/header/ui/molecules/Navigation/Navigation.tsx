import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NavigationElement = styled.li``;
const StyledNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

const links = ["home", "postpage"];
type Links = (typeof links)[number];

export const Navigation = () => {
  return (
    <NavigationList>
      {links.map((link: Links) => (
        <NavigationElement key={link}>
          <StyledNavLink to={link}>{link}</StyledNavLink>
        </NavigationElement>
      ))}
    </NavigationList>
  );
};

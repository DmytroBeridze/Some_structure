import styled from "styled-components";
import { Navigation } from "../../molecules/Navigation";

const StyledHeader = styled.div`
  padding: 20px 0;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

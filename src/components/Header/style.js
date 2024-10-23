import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111214;
  position: sticky;
  top: 0;
`;

export const Container = styled.nav`
  display: flex;
  gap: 5rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? `#7EDD5E` : `#C8C1B9`)};
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  text-decoration: none;
`;

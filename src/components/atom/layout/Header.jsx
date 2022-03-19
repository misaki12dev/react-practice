import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">User</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #efd9d1;
  padding: 8px 0;
  color: #fff;
  text-align: center;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;

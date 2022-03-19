import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #efd9d1;
  padding: 8px 0;
  color: #000;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

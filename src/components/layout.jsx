import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Div>{props.children}</Div>;
};

export default Layout;

const Div = styled.div`
  max-width: 1200px;
  min-width: 800px;
  justify-content: center;
  margin: auto;
`;

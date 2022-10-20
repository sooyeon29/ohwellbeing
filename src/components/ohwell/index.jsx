import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Ohbox, Img } from "./styles";

const OhWell = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Nav>
        <Ohbox
          onClick={() => {
            navigate("/ohsik");
          }}
        >
          오식(oh~sik)
        </Ohbox>
        <Ohbox
          onClick={() => {
            navigate("/alldat");
          }}
        >
          오댓(oh~dat)
        </Ohbox>
      </Nav>
      <Img></Img>
    </Container>
  );
};
export default OhWell;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeadDiv>
        <FstButton
          onClick={() => {
            navigate("/");
          }}
        >
          🏠
        </FstButton>
        <SedSpan>OH - WELL</SedSpan>
      </HeadDiv>
      <hr />
    </>
  );
};
export default Header;

const HeadDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 20px;
`;

const FstButton = styled.button`
  font-size: 30px;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 0.7;
  }
`;

const SedSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

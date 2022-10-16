import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeadDiv>
        <FstButton>🏠</FstButton>
        <SedSpan>OH - WELL</SedSpan>
      </HeadDiv>
      <hr />
    </>
  );
}

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

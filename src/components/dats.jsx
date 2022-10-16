import React from "react";
import styled from "styled-components";

export default function Dats() {
  return (
    <>
      <Title>모두의 OH-WELL-DAT (모두의 웰빙 댓글)</Title>
      <Boxes>
        <span>오늘 나의 웰빙식단!</span>
        <p>작성자:호잇</p>
        <p>자세히보기 -> 링크로 설정예정</p>
        <button> 🗑️</button>
      </Boxes>
    </>
  );
}

const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin: 20px;
`;

const Boxes = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  box-shadow: 0 0 0.5em 0 gray;
  border: none;
  height: 50px;
  margin: 30px 20px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-style: oblique;
  }
  p {
    color: blue;
  }
  button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-radius: 20px;
    &:hover {
      font-size: x-large;
    }
  }
`;

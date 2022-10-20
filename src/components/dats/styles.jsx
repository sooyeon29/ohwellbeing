import styled from "styled-components";

export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin: 20px;
`;

export const Boxes = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  box-shadow: 0 0 0.5em 0 gray;
  border: none;
  height: 80px;
  margin: 30px 20px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 25px;
    font-weight: 600;
  }
  p {
    color: blue;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 15px;
  }
  button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-radius: 20px;
    font-size: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
      font-size: x-large;
    }
  }
`;

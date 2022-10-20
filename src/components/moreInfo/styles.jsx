import styled from "styled-components";

export const InfoBox = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  max-width: 1000px;
  width: 80%;
  height: 300px;
  margin: 80px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    text-align: right;
  }
  span {
    font-size: x-large;
  }
  textarea {
    background-color: #2a4b2613;
    border: none;
    width: 95%;
    padding: 10px;
    font-size: 20px;
  }
  button {
    background-color: transparent;
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 1em 0 #2a4b2676;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #2a4b2676;
      color: white;
      font-weight: bolder;
    }
  }
`;

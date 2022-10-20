import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid none;
  height: 800px;
`;

export const SedForm = styled.div`
  border: 5px solid #e8f0fe;
  margin: 30px auto;
  max-width: 1000px;
  width: 90%;
  height: 500px;
  padding-left: 30px;
  input {
    border-radius: 20px;
    outline: darkblue;
    height: 30px;
    border: none;
    background-color: #e8f0fe;
    border: 2px solid #aac7f8;
  }
  select {
    width: 150px;
    height: 30px;
    background-color: #e8f0fe;
    border-radius: 20px;
    border: 3px solid #aac7f8;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    max-width: 1035px;
    width: 90%;
    height: 40px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    box-shadow: 0 0 0.5em 0 rgb(148, 173, 216);
    transition: background-color, 2s;

    &:hover {
      background-color: #1667bd36;
    }
  }
`;
export const ContentBox = styled.div`
  input {
    width: 600px;
    height: 150px;
  }
`;
export const SelectBox = styled.div`
  width: 450px;
  height: 50px;
`;

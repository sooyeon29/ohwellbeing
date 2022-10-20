import styled from "styled-components";

export const DadatBox = styled.div`
  max-width: inherit;
  width: 100%;
  margin: auto;
  min-width: 340px;
  height: 530px;
  transform: ${({ isUp }) => `translateX(${isUp ? 0 : 1500}px)`};
  transition: transform 500ms ease-in-out;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  background-color: #6f99695e;
  div {
    margin-left: 10px;
  }
`;
export const CommentBox = styled.form`
  margin: 30px auto;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;

  input {
    box-shadow: 0 0 1em 0 #25422276;
    border: none;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
  }
  button {
    background-color: transparent;
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 2em 0 #2a4b2676;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      background-color: #2a4b2676;
      color: white;
      font-weight: bolder;
    }
  }
`;
export const NickName = styled.div`
  input {
    margin-left: 8px;
  }
`;
export const Dadat = styled.div`
  margin-left: 18px;
  input {
    margin-left: 8px;
    width: 550px;
  }
`;
export const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto 100px auto;
  div {
    margin: 10px;
    font-weight: 500;
  }
`;
export const Mycomment = styled.div`
  box-shadow: 0 0 1em 0 #2a4b2676;
  padding: 20px 10px 10px 10px;
  font-size: large;
  border-radius: 10px;
  span {
    margin: 10px;
    color: #09351873;
  }
  input {
    background-color: #2a4b2613;
    border: none;
    width: 95%;
    padding: 10px;
    font-size: 18px;
  }
  button {
    float: right;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }
`;

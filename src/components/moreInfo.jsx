import React from "react";
import styled from "styled-components";

export default function MoreInfo() {
  return (
    <>
      <InfoBox>
        <p>2022.10.15 오후9:20</p>
        <span>이전으로->링크설정예정</span>
        <h2>오늘 나의 웰빙식단!</h2>
        <h4>고구마1개 닭가슴살100g 우유1컵</h4>
        <button>수정하기</button>
      </InfoBox>
      <hr />
      <h3>눌러서댓글보기</h3>
      <hr />
      <CommentBox>
        <div>
          <input type="text" />
          <input type="text" />
        </div>

        <button>추가하기</button>
      </CommentBox>
      <NewComment>
        <div>
          <span>닉네임</span>
          <p>댓글남겨주세용</p>
        </div>
        <div>
          <button>수정하기</button>
          <button>삭제</button>
        </div>
      </NewComment>
    </>
  );
}

const InfoBox = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  max-width: 1000px;
  width: 80%;
  height: 300px;
  margin: 100px auto;
  padding: 20px;
  h3 {
    margin: 10px;
  }
  span {
    color: blue;
    float: right;
  }
  button {
    max-width: 1000px;
    width: 80%;
    align-items: center;
    background-color: transparent;
  }
`;
const CommentBox = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NewComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  margin: 10px;
`;

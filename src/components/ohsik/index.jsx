import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOhwell from "../../hooks/useOhwell";
import { __addOhwell } from "../../redux/modules/ohsikSlice";
import { Container, SedForm, ButtonDiv, ContentBox } from "./styles";

const Ohsik = () => {
  //value 정리
  const [value, onChangehandler] = useOhwell();

  //hook 정리
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ohwell = useSelector((state) => state.ohsik);
  console.log(ohwell);
  //핸들러 모음
  const onClickAddFormHandler = () => {
    if (
      value.nickname.trim() === "" ||
      value.title.trim() === "" ||
      value.memo.trim() === ""
    ) {
      return alert("모두 입력해주세요!.");
    } else if (value.time === "선택" || value.time === "") {
      return alert("시간을 선택해주세요!");
    }
    dispatch(__addOhwell(value));
    navigate("/alldat");
  };

  return (
    <Container>
      <SedForm>
        <div>
          <h3>작성자</h3>
          <input
            required
            name="nickname"
            value={value.nickname}
            onChange={onChangehandler}
            type="text"
          />
        </div>
        <div>
          <h3>제목</h3>
          <input
            required
            name="title"
            value={value.title}
            onChange={onChangehandler}
            type="text"
          />
        </div>

        <div>
          <h3>오식(Oh-sik)</h3>
          <div>
            <select
              required
              value={value.time}
              onChange={onChangehandler}
              name="time"
            >
              <option>선택</option>
              <option>아침 🌞</option>
              <option>점심 🌈</option>
              <option>저녁 🌃</option>
            </select>
          </div>
        </div>
        <ContentBox>
          <h3>내용</h3>
          <input
            required
            name="memo"
            type="text"
            value={value.memo}
            onChange={onChangehandler}
          />
        </ContentBox>
      </SedForm>

      <ButtonDiv>
        <button
          onClick={() => {
            onClickAddFormHandler(value);
          }}
        >
          추가하기
        </button>
      </ButtonDiv>
    </Container>
  );
};

export default Ohsik;

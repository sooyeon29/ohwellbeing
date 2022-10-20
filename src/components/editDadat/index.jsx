import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { __getDadat, __postDadat } from "../../redux/modules/dadatSlice";
import Comment from "./comment";
import {
  CommentBox,
  Title,
  Dadat,
  DadatBox,
  NewComment,
  NickName,
} from "./styles";

const EditDadat = ({ ohwellId }) => {
  // 설렉터
  const globaldadat = useSelector((state) => state.dadat.dadats);
  console.log(globaldadat);
  // 설렉터 중  prop으로 받아온 값과 비교해 필요한 정보만 filter해주기 (알맞은 게시물에 알맞은 댓글)
  const newglobaldadat = globaldadat.filter((gdadat) => {
    console.log(gdadat.ohwellId, ohwellId);
    return gdadat.ohwellId === Number(ohwellId);
  });

  // hooks
  const [dadat, setDadat, dadatChangeHandler] = useInput();
  const [isUp, setIsUp] = useState(false);
  const dispatch = useDispatch();

  // 유즈이펙트 데이터 그려주기! GET!!
  useEffect(() => {
    dispatch(__getDadat());
  }, [dispatch]);

  //  인풋 박스 값 저장/추가 POST!!
  const dadatSubmitHandler = () => {
    if (dadat.nickname.trim() === "" || dadat.memo.trim() === "") return;
    dispatch(__postDadat({ ...dadat, ohwellId: Number(ohwellId) }));
    setDadat({
      nickname: "",
      memo: "",
      ohwellId: 0,
      date: "",
    });
  };

  return (
    <>
      <Title>
        <hr />
        <div
          onClick={() => {
            setIsUp((pre) => !pre);
          }}
        >
          {isUp ? "😶‍🌫️ 댓글숨기기" : "👀 눌러서댓글보기"}
        </div>
        <hr />
      </Title>
      <DadatBox isUp={isUp}>
        <CommentBox
          onSubmit={(e) => {
            e.preventDefault();
            dadatSubmitHandler(dadat);
          }}
        >
          <div>
            <NickName>
              이름 :
              <input
                type="text"
                required
                minLength="2"
                maxLength="5"
                title="2자 이상 5자 이하로만 입력 가능합니다."
                placeholder=" 5 글자 이하"
                name="nickname"
                value={dadat.nickname}
                onChange={dadatChangeHandler}
              />
            </NickName>
            <Dadat>
              내용 :
              <input
                type="text"
                required
                minLength="2"
                maxLength="20"
                title="2자 이상 20자 이하로만 입력 가능합니다."
                placeholder=" 20 글자 이하"
                name="memo"
                value={dadat.memo}
                onChange={dadatChangeHandler}
              />
            </Dadat>
          </div>
          <button>추가하기</button>
        </CommentBox>

        {/* 대댓  수정하기 누르면 -> 인풋박스로 변경됨*/}

        <NewComment>
          {newglobaldadat?.map((mydadats) => (
            <Comment mydadats={mydadats} />
          ))}
        </NewComment>
      </DadatBox>
    </>
  );
};

export default EditDadat;

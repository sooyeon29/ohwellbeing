import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { __getOhwell } from "../../redux/modules/ohsikSlice";
import { __getOhwells, __updateOhwells } from "../../redux/modules/ohsiksSlice";
import EditDadat from "../editDadat/index";
import { InfoBox } from "./styles";

const MoreInfo = () => {
  // 설렉터
  const ohwell = useSelector((state) => state.ohsiks.ohwell);
  const myohwell = useSelector((state) => state.ohsik.ohwells);
  // hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(ohwell?.memo);

  // 수정 버튼 PATCH
  const onClickUpdateHandler = () => {
    if (update.trim() === "") {
      return alert("수정 할 내용이 없습니다.");
    }
    dispatch(__updateOhwells({ ...ohwell, memo: update }));
    setEdit(false);
  };
  // 화면에 그려주기 GET
  useEffect(() => {
    dispatch(__getOhwells(id));
    dispatch(__getOhwell());
  }, [dispatch, id]);

  const newMyOhwell = myohwell.filter((ohwell) => ohwell.id === Number(id));

  return (
    /// 수정 버튼 작업 공간
    <>
      {edit ? (
        <InfoBox>
          <div>
            <Link to={"/alldat"}>이전으로</Link>
          </div>
          <form>
            {newMyOhwell?.map((ohwell) => {
              return (
                <span key={ohwell.id}>
                  {ohwell.time === "아침 🌞"
                    ? "🌞"
                    : ohwell.time === "점심 🌈"
                    ? "🌈"
                    : "🌃"}
                </span>
              );
            })}
            <h4>TODAY'S OH-SIK (오늘의 식단)</h4>
            <h4>{ohwell?.title}</h4>
            <textarea
              name="memo"
              maxLength={200}
              value={update}
              onChange={(e) => {
                setUpdate(e.target.value);
              }}
            >
              <h2>{ohwell?.memo}</h2>
            </textarea>
          </form>

          <div>
            <button onClick={onClickUpdateHandler}>저장 하기</button>
          </div>
        </InfoBox>
      ) : (
        <InfoBox>
          <div>
            <Link to={"/alldat"}>이전으로</Link>
          </div>
          <form>
            {newMyOhwell?.map((ohwell) => {
              return (
                <span key={ohwell.id}>
                  {ohwell.time === "아침 🌞"
                    ? "🌞"
                    : ohwell.time === "점심 🌈"
                    ? "🌈"
                    : "🌃"}
                </span>
              );
            })}
            <h4>TODAY'S OH-SIK (오늘의 식단)</h4>

            <h4>{ohwell?.title}</h4>
            <h2>{ohwell?.memo}</h2>
          </form>

          <div>
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              수정하기
            </button>
          </div>
        </InfoBox>
      )}
      <EditDadat ohwellId={id} />
    </>
  );
};
export default MoreInfo;

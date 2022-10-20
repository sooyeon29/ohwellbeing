import { useState } from "react";
import { useDispatch } from "react-redux";
import { __deleteDadat, __updateDadat } from "../../redux/modules/dadatSlice";
import { Mycomment } from "./styles";

function Comment({ mydadats }) {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [newDadat, setNewDadat] = useState("");

  // 눌러서 댓글보기의 댓글 삭제하기 Delete
  const dadatDeleteHandler = (id) => {
    const result = window.confirm("정말로 삭제 하시겠습니까?");
    if (result) {
      dispatch(__deleteDadat(id));
    } else {
      return;
    }
  };
  // 대댓글 수정 저장하기 변경하여 저장 patch
  const onClickUpdateHandler = (newDadatId) => {
    dispatch(__updateDadat({ newDadatId, newDadat }));
    setNewDadat("");
    setIsEditMode(false);
  };
  return (
    <div key={mydadats.id}>
      {/* 대댓 수정창 오픈 상태__ */}
      <Mycomment>
        <span>- {mydadats.nickname}</span>
        <div>
          {isEditMode && (
            <>
              {/* 대댓 수정중 일때 버튼 */}

              <button
                onClick={() => {
                  setIsEditMode(false);
                }}
              >
                🔙
              </button>
              <button onClick={() => onClickUpdateHandler(mydadats.id)}>
                🔒
              </button>
            </>
          )}

          {!isEditMode && (
            <>
              {/* 대댓 리스트 보일때 버튼 */}

              <button onClick={() => dadatDeleteHandler(mydadats.id)}>
                ❌
              </button>
              <button onClick={() => setIsEditMode(true)}>✏️</button>
            </>
          )}
        </div>
        <div>
          {isEditMode ? (
            <input
              type="text"
              required
              minLength="5"
              maxLength="20"
              title="5자 이상 20자 이하로만 입력 가능합니다."
              placeholder={mydadats.memo}
              name="memo"
              value={newDadat.memo}
              onChange={(ev) => {
                setNewDadat(ev.target.value);
              }}
            />
          ) : (
            // 대댓 적혀있는 리스트
            <>
              <h6>{mydadats.date}</h6>
              <h4>{mydadats.memo}</h4>
            </>
          )}
        </div>
      </Mycomment>
    </div>
  );
}

export default Comment;

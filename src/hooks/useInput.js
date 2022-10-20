import { useState } from "react";

const useInput = () => {
  const [dadat, setDadat] = useState({
    nickname: "",
    memo: "",
    ohwellId: 0,
    date: "2022.10.12 오후 7:16:01",
  });
  const date =
    //   // formatDate(new Date());
    new Date().getFullYear() +
    "." +
    new Date().getMonth() +
    1 +
    "." +
    new Date().getDate() +
    " 오후 " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const dadatChangeHandler = (event) => {
    const { name, value } = event.target;
    setDadat({ ...dadat, [name]: value, date: date });
  };
  return [dadat, setDadat, dadatChangeHandler];
};

export default useInput;

import React, { useState, useEffect } from "react";
import { cleanup } from "@testing-library/react";

function UseEffect() {
  // useState 함수는 하나의 상태값만 관리하기 때문에 관리할 state가 여러개라면 useState를 여러번 사용한다
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // ======== useEffect ========
  //리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정

  // state값이 변할때마다 실행
  //   useEffect(() => {
  //     console.log({
  //       name,
  //       nickname
  //     });
  //   });

  // 컴포넌트가 화면에 가장 처음 렌더링 될 한번만 실행(업데이트 되도 재실행X)
  //   useEffect(() => {
  //     console.log("マウントの時だけ実行");
  //   }, []);

  // 특정 값이 바뀔대만 재실행
  //   useEffect(() => {
  //     console.log("特定の値が変わる時だけ実行");
  //   }, [name]);

  // useEffect 는 기본적으로 렌더링 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라짐
  // 만약, 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 cleanup함수를 반환해야 한다
  useEffect(() => {
    console.log("effect", name);
    return () => {
      console.log("cleanup", name);
    };
  });
  // 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶으면 useEffect 함수의 두번째 파라미터에 빈 배열을 넣는다

  const onChangeName = event => {
    setName(event.target.value);
  };

  const onChangeNickname = event => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>名前：</b>
          {name}
        </div>
        <div>
          <b>あだ名：</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default UseEffect;

import React, { useReducer } from "react";

// useReducer는 useState보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용
// 리듀서 : 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달 받아 새로운 상태를 반환

function counterReducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

function UseReducerCounter() {
  // useReducer의 첫 인수는 리듀서 함수, 두번째 인수는 해당 리듀서의 기본값
  // state: 현재 가르키고 있는 상태
  // dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
}

function InputReducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function UseReducerInfo() {
  const [state, dispatch] = useReducer(InputReducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  const onChange = event => {
    dispatch(event.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>名前：</b>
          {name}
        </div>
        <div>
          <b>あだ名：</b>
          {nickname}
        </div>
      </div>
    </div>
  );
}

export { UseReducerCounter, UseReducerInfo };

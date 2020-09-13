import React, { useState } from "react";

function UseState() {
  // 카운터의 기본값을 0으로 설정
  // 첫원소 = state, 두번째 원소 = state를 설정하는 함수
  // 두번째 원소에 인수를 넣어서 호출하면 state가 인수로 값이 바뀌고 컴포넌트가 리렌더링 됨
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        現在のカウンターは<b>{value}</b>です。
      </p>
      <button onClick={() => setValue(value + 1)}>+ 1</button>
      <button onClick={() => setValue(value - 1)}>- 1</button>
    </div>
  );
}

export default UseState;

// useCallback 은 useMemo와 상당히 비슷한 함수
// 주로 렌더링 성능을 최적화해야 하는 상황에서 사용(컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아지거나 등등)

import React, { useState, useCallback, useMemo } from "react";

function getAverage(numbers) {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

function UseCallback() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback
  // 첫 인수 : 생성해주고 싶은 함수
  // 두번째 인수 : 배열(어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시)

  const onChange = useCallback(event => {
    setNumber(event.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(
    event => {
      const nextList = [...list, +number];
      setList(nextList);
      setNumber("");
    },
    [number, list] // number 혹은 list 가 바뀌었을 때만 함수 생성
  );

  const avg = useMemo(() => getAverage(list), [list]);

  // useCallback 은 결국 useMemo 에서 함수를 반환하는 상황에서 더 편하게 사용 할 수 있는 Hook
  // useMemo: 숫자, 문자열, 객체 처럼 일반 값을 재사용
  // useCallback: 함수를 재사용

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default UseCallback;

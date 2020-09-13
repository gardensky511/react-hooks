// useMemo: 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
// 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용

import React, { useState, useMemo } from "react";

function getAverage(numbers) {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
}

function UseMemo() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = event => {
    setNumber(event.target.value);
  };
  const onInsert = event => {
    const nextList = [...list, +number];
    setList(nextList);
    setNumber("");
  };

  // 첫 인수 = 어떻게 연산할 지 정의하는 함수
  // 두번째 인수 = 배열(이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용)
  const avg = useMemo(() => getAverage(list), [list]);

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
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
}

export default UseMemo;

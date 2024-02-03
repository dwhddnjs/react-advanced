import React, { useCallback, useEffect, useState } from "react"

//함수를 메모리에 저장함
//컴포넌트가 렌더링 => 컴포넌트가 호출 => 모든 변수 초기화
// useCallback 사용시 렌더링 => 컴포넌트 호출 => 메모리에 저장되어있는 함수 재사용
// 의존성 배열에 값이 변경이 된다면 새로 초기화 해서 반환함

export const UseCallbackEx = () => {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)

  const someFunc = useCallback(() => {
    console.log(`number: ${number}`)
    return
  }, [number])

  useEffect(() => {
    console.log("sumfuc 이 변경되었습니다")
  }, [someFunc])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunc}>call func</button>
    </div>
  )
}

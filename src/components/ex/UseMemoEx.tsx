import React, { useEffect, useMemo, useState } from "react"

//동일한 값을 리턴하는 함수를 메모리에 저장후 재사용한다
//맨 처음 계산 후 필요할때 마다 메모리에서 가져와서 재사용함
//기본: 렌더링이 된다 => 컴포넌트 함수를 호출한다 => 모든 내부 변수를 초기화 한다
//MeMo : 렌더링 => 컴포넌트 함수 호출 계산된값을 저장 => 렌더링 => 컴포넌트 호출 계산된 값을 메모리에서 가져와 저장
//보통 최적화 할떄 씀
//콜백 함수와 dep를 받음
//메모리 사용으로 인해 오히려 성능악화 시킬수있음

// const calculate = (number: number) => {
//   console.log("어려운 계산")
//   for (let i = 0; i < 99999999; i++) {
//     //
//   }
//   return number + 10000
// }

// const calculate2 = (number: number) => {
//   console.log("쉬운 계산")
//   return number + 1
// }

// export const UseMemoEx = () => {
//   const [number, setNumber] = useState(1)
//   const [number2, setNumber2] = useState(1)

//   const sum = useMemo(() => {
//     return calculate(number)
//   }, [number])
//   //number값이 변경될때만 새로 실행을 하고 메모리에 저장되어있는값을 재사용함

//   const sum2 = calculate2(number2)

//   return (
//     <div>
//       <h3>계산</h3>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <span>+ 10000 = {sum}</span>
//       <h3>계산2</h3>
//       <input
//         type="number"
//         value={number2}
//         onChange={(e) => setNumber2(parseInt(e.target.value))}
//       />
//       <span>+ 1 = {sum2}</span>
//     </div>
//   )
// }

export const UseMemoEx = () => {
  const [number, setNumber] = useState(0)
  const [isKorea, setIsKorea] = useState(true)

  //원시 타입 : string Number boolean null undefined biglnt symbol
  //객체 타입 : object array

  //   const location = {
  //     contry: isKorea ? "한국" : "외국",
  //   }
  const location = useMemo(() => {
    return { contry: isKorea ? "한국" : "외국" }
  }, [isKorea])

  useEffect(() => {
    console.log("useEffect 호출")
  }, [location])

  return (
    <div>
      <h3>하루에 몇끼 먹음?/</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <hr />
      <h3>어느나라에 있음?</h3>
      <p>나라: {location.contry}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타삼</button>
    </div>
  )
}

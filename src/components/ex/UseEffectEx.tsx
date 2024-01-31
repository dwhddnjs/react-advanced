import React, { useEffect, useState } from "react"

//콜백만 넣으면 렌더링 될때 마다 생성됨
//dep array를 넣으면 빈배열 첫 렌더링때만 실행 value를 넣어주면 value값이 변할때 마다 실행
//clean up func 는 타이머나 이벤트를 네트워크 작업을 제거 할때
const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행중")
    }, 1000)
    return () => {
      clearInterval(timer)
      console.log("timer 종료")
    }
  }, [])
  return (
    <div>
      <span>타이머 실행</span>
    </div>
  )
}

const UseEffectEx = () => {
  const [showTimer, setShowTimer] = useState(false)
  //   const [count, setCount] = useState(1)
  //   const [name, setName] = useState("")

  //   const handleCountUpdate = () => {
  //     setCount(count + 1)
  //   }

  //   const handleInputChange = (e: any) => {
  //     setName(e.target.value)
  //   }

  //   //렌더링 될때마다 매번 실행
  //   useEffect(() => {
  //     console.log("렌더링 될때 마다 실행")
  //   })

  //   //첫 렌더링때만 실행
  //   useEffect(() => {
  //     console.log("첫 렌더링 실행")
  //   }, [])

  //   //마운팅 후 count 값이 변화될때 마다 실행
  //   useEffect(() => {
  //     console.log("Count 변화")
  //   }, [count])

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Timer</button>
      {/* <button onClick={handleCountUpdate}>update</button>
      <span>count: {count}</span>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={handleInputChange}
        />
        <span>name: {name}</span>
      </div> */}
    </div>
  )
}

export default UseEffectEx

import { useState } from "react"

type TodoTypes = {
  id: number
  title: string
  completed: boolean
}

// Fragement
// 리액트 컴포넌트는 반드시 최상위 태그로 감싸야 한다
// 리액트는 하나의 컴포넌트만 리턴 할수 있기 때문

// key
// 배열을 map을 통해 렌더를 할때는 고유값으로 key가 필요하다
// 이는 컴포넌트 내부 앨라먼트를 변경 추가 삭제시 식별을 하기 위 해 돕는다
// 키값을 안넣으면 엘리먼트를 추가 했다고 가정시 자식 엘리먼트 전부를 새로그린다
// 이를 통해 엘리먼트들의 안정적인 고유성을 부여한다

// key index를 쓰면 안되는 이유
// 요소는 id는 고유 해야하며 추가 삭제가 발생시 reindexing 일어나면서 id 값이 변한다

export const Basic = () => {
  const [todo, setTodo] = useState<TodoTypes[]>([
    { id: 1, title: "아침 먹기", completed: true },
    { id: 2, title: "점심 먹기", completed: false },
    { id: 3, title: "저녁 먹기", completed: false },
  ])

  const onPushData = () => {
    setTodo([
      ...todo,
      { id: todo.length + 1, title: "저녁2 먹기", completed: false },
    ])
  }

  const onUnshiftData = () => {
    setTodo([
      { id: todo.length + 1, title: "저녁2 먹기", completed: false },
      ...todo,
    ])
  }

  return (
    <div>
      <div>{todo[0].title}</div>
      {todo.map((item) => (
        <div>{item.title}</div>
      ))}
      <button onClick={onPushData}>push</button>
      <button onClick={onUnshiftData}>unshift</button>
    </div>
  )
}

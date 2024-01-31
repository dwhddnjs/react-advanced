import { useState } from "react"

type TodoTypes = {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [todo, setTodo] = useState<TodoTypes[]>([
    { id: 1, title: "아침 먹기", completed: true },
    { id: 2, title: "점심 먹기", completed: false },
    { id: 3, title: "저녁 먹기", completed: false },
  ])
  return (
    <div>
      <div>{todo[0].title}</div>
      {todo.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default App

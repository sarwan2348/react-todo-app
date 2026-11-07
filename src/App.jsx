import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodos = (todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter(item => item.id !== id))
  }

  return (
    <div className="todo-card">
      <h2>My To-Do List</h2>
      <TodoForm addTodos={addTodos} />
      <TodoList todos={todos} onDelete={deleteTodos} />
    </div>
  )
}

export default App

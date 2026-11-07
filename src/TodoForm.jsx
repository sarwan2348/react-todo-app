import { useRef, useState } from "react"

function TodoForm({ addTodos }) {
  const [addTask, setAddTask] = useState("")
  const taskRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!addTask.trim()) return alert("Task must Be Filled")

    const newTask = {
      id: Date.now(),
      task: addTask
    }

    addTodos(newTask)
    setAddTask("")
    taskRef.current.focus()
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
        ref={taskRef}
      />
      <button className="add-btn">Add</button>
    </form>
  )
}

export default TodoForm

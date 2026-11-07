import TodoItem from "./TodoItem"

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="no-Todos">No task Yet</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList

function TodoItem({ item, onDelete }) {
  return (
    <li className="todo-item">
      {item.task}
      <button className="delete-btn" onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  )
}

export default TodoItem

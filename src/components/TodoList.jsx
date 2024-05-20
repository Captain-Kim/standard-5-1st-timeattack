import TodoItem from "./TodoItem";

export default function TodoList({
  section,
  todos,
  handleToggle,
  handleDelete,
}) {
  return (
    <>
      <h1>{section}</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul>
            <li>
              <h3>{todo.title}</h3>
              <span>{todo.content}</span>
            </li>
            <button type="button" onClick={() => handleDelete(todo.id)}>
              삭제
            </button>
            <TodoItem todo={todo} handleToggle={handleToggle} />
          </ul>
        </div>
      ))}
    </>
  );
}

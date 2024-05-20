import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialState = [];
  const [todos, setTodos] = useState(initialState);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTitle === "" || newContent === "") {
      alert("값이 입력되지 않았습니다.");
      setNewTitle("");
      setNewContent("");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      contents: newContent,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewContent("");
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <form onSubmit={addTodo}>
        <TodoForm
          labelText={"제목"}
          sortInput={newTitle}
          setInput={setNewTitle}
          placeholder={"제목"}
          todos={todos.filter((todo) => !todo.isDone)}
        />
        <TodoForm
          labelText={"내용"}
          sortInput={newContent}
          setInput={setNewContent}
          placeholder={"내용"}
          todos={todos.filter((todo) => todo.isDone)}
        />
        <button type="submit">작성하기</button>
      </form>

      <TodoList
        section="Working!"
        isDone={false}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        todos={todos.filter((todo) => !todo.isDone)}
      />
      <TodoList
        section="Done!"
        isDone={true}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        todos={todos.filter((todo) => todo.isDone)}
      />
    </>
  );
}

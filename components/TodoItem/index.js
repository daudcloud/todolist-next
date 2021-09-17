import { useAllList, useList } from "../../context/ListContext";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
    setAllTodos(
      allTodos.map((allTodo) => {
        if (allTodo.id === id) {
          return { ...allTodo, complete: !allTodo.complete };
        }
        return allTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    const tempTodos = allTodos.filter((todo) => todo.id !== id);
    setTodos(tempTodos);
    setAllTodos(tempTodos);
  };

  return (
    <>
      <div
        onClick={() => toggleComplete(todo.id)}
        className={todo.complete ? "red" : ""}
      >
        {todo.title} {todo.id}{" "}
      </div>
      <span onClick={() => deleteTodo(todo.id)}>delete</span>
    </>
  );
}

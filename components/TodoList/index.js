import { useList, useAllList } from "../../context/ListContext";
import TodoItem from "../TodoItem";

export default function TodoList() {
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

  return (
    <>
      {todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </>
  );
}

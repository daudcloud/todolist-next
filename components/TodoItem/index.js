import Image from "next/image";
import { useAllList, useList } from "../../context/ListContext";
import { useTheme } from "../../context/ThemeContext";
import { StyledItem } from "./style";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [darkTheme, setDarkTheme] = useTheme();

  const toggleComplete = () => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, complete: !t.complete };
        }
        return t;
      })
    );
    setAllTodos(
      allTodos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, complete: !t.complete };
        }
        return t;
      })
    );
  };

  const deleteTodo = (id) => {
    const tempTodos = allTodos.filter((allTodo) => allTodo.id !== id);
    setTodos(tempTodos);
    setAllTodos(tempTodos);
  };

  return (
    <StyledItem
      darkTheme={darkTheme ? true : false}
      className={todo.complete ? "completed" : ""}
    >
      <span className="circle" onClick={() => toggleComplete(todo.id)}>
        {todo.complete && (
          <Image src="/images/icon-check.svg" width="10" height="10" />
        )}
      </span>
      <span className="todo-title">{todo.title}</span>
      <span className="delete" onClick={() => deleteTodo(todo.id)}>
        <Image src="/images/icon-cross.svg" layout="fill" />
      </span>
    </StyledItem>
  );
}

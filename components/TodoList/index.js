import { useList, useAllList } from "../../context/ListContext";
import { useTheme } from "../../context/ThemeContext";
import TodoItem from "../TodoItem";
import { StyledList } from "./style";
import Handler from "../Handler";

export default function TodoList() {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [darkTheme, setDarkTheme] = useTheme();

  return (
    <StyledList darkTheme={darkTheme ? true : false}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
      <Handler />
    </StyledList>
  );
}

import { useState, useEffect } from "react";
import { useAllList, useList } from "../../context/ListContext";
import { useTheme } from "../../context/ThemeContext";
import StyledHandler from "./style";

export default function Handler() {
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [darkTheme, setDarkTheme] = useTheme();

  useEffect(() => {
    if (active) {
      const activeTodos = allTodos.filter((allTodo) => !allTodo.complete);
      setTodos(activeTodos);
    }

    if (completed) {
      const activeTodos = allTodos.filter((allTodo) => allTodo.complete);
      setTodos(activeTodos);
    }

    if (!completed && !active) setTodos(allTodos);
  }, [active, completed]);

  const handleActive = () => {
    setActive(true);
    setCompleted(false);
  };

  const handleCompleted = () => {
    setCompleted(true);
    setActive(false);
  };

  const all = () => {
    setActive(false);
    setCompleted(false);
  };

  const deleteComplete = () => {
    const tempTodos = allTodos.filter((todo) => todo.complete === false);
    setTodos(tempTodos);
    setAllTodos(tempTodos);
  };
  return (
    <StyledHandler darkTheme={darkTheme ? true : false}>
      <span className="total-active">
        {allTodos.filter((todo) => todo.complete !== true).length}{" "}
        {` items left`}
      </span>
      <div className="handler">
        <span className={!active && !completed ? "active" : ""} onClick={all}>
          All
        </span>
        <span className={active ? "active" : ""} onClick={handleActive}>
          Active
        </span>
        <span className={completed ? "active" : ""} onClick={handleCompleted}>
          Completed
        </span>
      </div>
      <span className="clear" onClick={deleteComplete}>
        Clear Complete
      </span>
    </StyledHandler>
  );
}

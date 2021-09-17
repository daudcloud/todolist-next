import { useState, useEffect } from "react";
import { useAllList, useList } from "../../context/ListContext";

export default function Handler() {
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();

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
    <>
      <span onClick={handleActive}>active</span>{" "}
      <span onClick={handleCompleted}>completed</span>{" "}
      <span onClick={all}>all</span>{" "}
      <span onClick={deleteComplete}>delete complete</span>
    </>
  );
}

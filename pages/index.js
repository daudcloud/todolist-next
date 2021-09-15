import Head from "next/head";
import { useState } from "react";
import { useList, useAllList } from "../context/ListContext";

export default function Home() {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [listInput, setListInput] = useState("");

  const handleChange = (e) => {
    setListInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempTodo = {
      id: Date.now(),
      title: listInput,
      complete: false,
    };
    setTodos([...todos, tempTodo]);
    setAllTodos([...allTodos, tempTodo]);
    setListInput("");
  };

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

  const active = () => {
    const activeTodos = allTodos.filter((allTodo) => !allTodo.complete);
    setTodos(activeTodos);
  };

  const completed = () => {
    const completeTodos = allTodos.filter((allTodo) => allTodo.complete);
    setTodos(completeTodos);
  };

  const all = () => {
    setTodos(allTodos);
  };

  const deleteTodo = (id) => {
    const tempTodos = allTodos.filter((todo) => todo.id !== id);
    setTodos(tempTodos);
    setAllTodos(tempTodos);
  };

  const deleteComplete = () => {
    const tempTodos = allTodos.filter((todo) => todo.complete === false);
    setTodos(tempTodos);
    setAllTodos(tempTodos);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <input type="text" value={listInput} onChange={handleChange} />
        {todos.map((todo) => {
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
        })}
        <br />
        <span onClick={active}>active</span>{" "}
        <span onClick={completed}>completed</span>{" "}
        <span onClick={all}>all</span>{" "}
        <span onClick={deleteComplete}>delete complete</span>
      </form>
    </>
  );
}

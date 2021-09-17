import { useState } from "react";
import { useList, useAllList } from "../../context/ListContext";

export default function Form() {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [listInput, setListInput] = useState();
  const handleChange = (e) => {
    setListInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listInput === "") return null;
    let tempTodo = {
      id: Date.now(),
      title: listInput,
      complete: false,
    };
    setTodos([...todos, tempTodo]);
    setAllTodos([...allTodos, tempTodo]);
    setListInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={listInput} onChange={handleChange} />
    </form>
  );
}

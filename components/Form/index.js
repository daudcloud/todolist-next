import { useState } from "react";
import { useList, useAllList } from "../../context/ListContext";
import { useTheme } from "../../context/ThemeContext";
import StyledForm from "./style";

export default function Form() {
  const [todos, setTodos] = useList();
  const [allTodos, setAllTodos] = useAllList();
  const [listInput, setListInput] = useState("");
  const [darkTheme, setDarkTheme] = useTheme();
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
    <StyledForm darkTheme={darkTheme ? true : false} onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="circle"></div>
        <input
          type="text"
          value={listInput}
          onChange={handleChange}
          placeholder="Create a new todo..."
        />
      </div>
    </StyledForm>
  );
}

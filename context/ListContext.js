import { createContext, useContext, useState, useEffect } from "react";

const ListContext = createContext();
const UpdateListContext = createContext();
const AllListContext = createContext();
const UpdateAllListContext = createContext();

export function useList() {
  return [useContext(ListContext), useContext(UpdateListContext)];
}

export function useAllList() {
  return [useContext(AllListContext), useContext(UpdateAllListContext)];
}

export function ListProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);

  return (
    <ListContext.Provider value={todos}>
      <AllListContext.Provider value={allTodos}>
        <UpdateListContext.Provider value={setTodos}>
          <UpdateAllListContext.Provider value={setAllTodos}>
            {children}
          </UpdateAllListContext.Provider>
        </UpdateListContext.Provider>
      </AllListContext.Provider>
    </ListContext.Provider>
  );
}

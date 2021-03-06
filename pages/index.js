import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { useTheme } from "../context/ThemeContext";
import Main from "./style";

export default function Home() {
  const [darkTheme, setDarkTheme] = useTheme();
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Main darkTheme={darkTheme ? true : false}>
        <div className="container">
          <div className="header">
            <h1 className="title">TODO</h1>
            <span
              className="toggleDark"
              onClick={() => setDarkTheme((prevDarkTheme) => !prevDarkTheme)}
            >
              {!darkTheme && (
                <Image src="/images/icon-moon.svg" width="25" height="25" />
              )}
              {darkTheme && (
                <Image src="/images/icon-sun.svg" width="25" height="25" />
              )}
            </span>
          </div>
          <Form />
          <TodoList />
          <br />
        </div>
      </Main>
    </>
  );
}

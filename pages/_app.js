import "../styles/globals.css";
import { ListProvider } from "../context/ListContext";
import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ListProvider>
        <Component {...pageProps} />
      </ListProvider>
    </ThemeProvider>
  );
}

export default MyApp;

import "../styles/globals.css";
import { ListProvider } from "../context/ListContext";

function MyApp({ Component, pageProps }) {
  return (
    <ListProvider>
      <Component {...pageProps} />
    </ListProvider>
  );
}

export default MyApp;

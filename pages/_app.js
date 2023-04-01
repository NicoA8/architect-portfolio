import { useContext } from "react";
import { ThemeContext, ThemeContextWrap } from "../context/theme";
import "../styles/style-global.css";

function MyApp({ Component, pageProps }) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContextWrap>
      <Component {...pageProps} />
    </ThemeContextWrap>
  );
}

export default MyApp;

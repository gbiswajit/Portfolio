import { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro"
import ProductList from "./Components/productlist/ProductList";
import Toggle from "./Components/toggle/Toggle";
import { ThemeContext } from "../src/context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  );
};

export default App;
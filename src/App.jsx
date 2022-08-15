import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro"
import ProductList from "./Components/productlist/ProductList";
const App = () => {
  return <div>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>;
};

export default App;
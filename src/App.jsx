import "./App.css";
import MenuList from "./components/MenuList";
import { foodItems } from "./utils/data";
const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      {/* pass the variable foodItems as props to MenuList component */}
      <MenuList listmenu={foodItems} />
    </article>
  );
};

export default App;

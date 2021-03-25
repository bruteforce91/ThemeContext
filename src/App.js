import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";
import { useContext } from "react";

function App() {
  const { dark, toggleDark } = useContext(ThemeContext);
  console.log("dark", dark);
  console.log("toggle", toggleDark);
  return (
    <div className="App">
      <div className={dark? "addDark":""}>
        <h1 className={dark ? "addLightText":"title"}>{dark ? "Dark Mode":"Light Mode"}</h1>
        <div className="wrapButton">
          <input
            onChange={() => toggleDark(!dark)}
            type="checkbox"
            className={dark? "toggle dark":"toggle"}
            name="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

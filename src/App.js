import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";
import { useContext } from "react";

function App() {
  const { state, toggle } = useContext(ThemeContext);
  // console.log("dark", dark);
  // console.log("toggle", toggleDark);
  return (
    <div className="App">
      <div className={state.dark? "addDark":""}>
        <h1 className={state.dark ? "addLightText":"title"}>{state.dark ? "Dark Mode":"Light Mode"}</h1>
        <div className="wrapButton">
          <input
            onChange={() => toggle()}
            type="checkbox"
            className={state.dark? "toggle dark":"toggle"}
            name="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

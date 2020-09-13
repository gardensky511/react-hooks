import React, { useState } from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import { UseReducerCounter, UseReducerInfo } from "./UseReducer";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      {/* <useState /> */}

      {/* <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "HIDE" : "SHOW"}
        </button>
        <hr />
        {visible && <useEffect />}
      </div>
      <useEffect /> */}

      {/* <useContext /> */}

      <UseReducerCounter />

      <UseReducerInfo />
    </div>
  );
}

export default App;

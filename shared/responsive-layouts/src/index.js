import React from "react";
import ReactDOM from "react-dom";
import DrawerContainer from "./DrawerContainer";

import { canvas } from "@instructure/ui-themes/";
import "./styles.css";

// not loving the scroll bars being thrown on the nav is there a way around that?
function App() {
  canvas.use();
  return (
    <div className="App">
      <DrawerContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

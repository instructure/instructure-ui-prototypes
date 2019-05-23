import React from "react";
import ReactDOM from "react-dom";
import DrawerContainer from "./DrawerContainer";
import MainNav from "./MainNav";

import { canvas } from "@instructure/ui-themes/";
import "./styles.css";

// could the size be a a conditional prop based on the state of the nav expanded or collapsed?
// not loving the scroll bars being thrown on the nav is there a way around that?
function App() {
  canvas.use();
  return (
    <div className="App">
      <div className="mainNav">
        <MainNav />
      </div>
      <div className="MainContent">
        <DrawerContainer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

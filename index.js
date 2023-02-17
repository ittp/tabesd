import React from "react";
import ReactDOM from "react-dom";
import { version } from "antd";
import "./index.css";
import Demo from "./reproduce";

ReactDOM.render(
  <div className="App">
    <h2>antd version: {version}</h2>
    <Demo />
  </div>,
  document.getElementById("root")
);

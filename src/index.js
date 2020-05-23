import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import{ BrowserRouter} from "react-router-dom";
import {staticData} from './store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...staticData}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

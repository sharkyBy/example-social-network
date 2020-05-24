import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import{ BrowserRouter} from "react-router-dom";
import { staticData, addPost, updatePost, subscribe } from './state'





 let RenderTree =() => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...staticData} addPost={addPost} updatePost={updatePost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}


RenderTree();
subscribe(RenderTree);



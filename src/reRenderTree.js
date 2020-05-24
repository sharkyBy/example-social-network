import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import{ BrowserRouter} from "react-router-dom";
import { addPost, updatePost } from './store'




export let reRenderTree =(staticData) => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...staticData} addPost={addPost} updatePost={updatePost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}
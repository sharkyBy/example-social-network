import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import{ BrowserRouter} from "react-router-dom";
import store from './store'





 let renderTree =() => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...store} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}


renderTree();
store.subscribe(renderTree);



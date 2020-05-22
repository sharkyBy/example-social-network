import React from "react";
import "./style/app.scss";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <div className="app__container">

        <Header />        
        <Sidebar />
        <Main />

      </div>
    </div>
  );
}

export default App;

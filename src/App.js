import React from "react";
import "./style/App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Dialogs from "./components/dialogs/Dialogs";
import News from './components/news/News';
import Music from './components/music/Music';
import Setting from './components/setting/Setting';
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Sidebar />
        
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/profile" component={Main} />
            <Route exact path="/message" component={Dialogs} />
            <Route exact path="/news" component={News} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/setting" component={Setting} />
          </Switch>
        
      </div>
    </div>
  );
}

export default App;

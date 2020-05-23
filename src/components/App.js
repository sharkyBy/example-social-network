import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Dialogs from "./dialogs/Dialogs";
import News from './news/News';
import Music from './music/Music';
import Setting from './setting/Setting';
import { Switch, Route, Redirect } from "react-router-dom";

function App(props) {
  return (
    <div className="app">
      <div className="app__container">
        <Header {...props.header}/>
        <Sidebar {...props.sidebar}/>
        
          <Switch>
            <Route exact path="/"> <Redirect to='/profile' /> </Route> 
            <Route exact path="/profile"> <Main {...props.main} /> </Route> 
            <Route  path="/message"> <Dialogs {...props.dialog} /> </Route>
            <Route exact path="/news" render={ () => <News /> } />
            <Route exact path="/music" component={Music} />
            <Route exact path="/setting" component={Setting} />
          </Switch>
        
      </div>
    </div>
  );
}

export default App;

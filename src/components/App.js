import React from "react";
import "./App.scss";
import Header from "../components/main/header/Header";
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
        <Header {...props.getState().header}/>
        <Sidebar {...props.getState().sidebar}/>
        
          <Switch>
            <Route exact path="/"> <Redirect to='/profile' /> </Route> 
            <Route exact path="/profile"> 
              <Main 
                {...props.getState().main} 
                dispatch={props.dispatch} 
                 
                /> 
            </Route> 
            <Route  path="/message"> 
              <Dialogs 
                {...props.getState().dialog} 
                dispatch={props.dispatch}                       
                
              /> 
            </Route>
            <Route exact path="/news" render={ () => <News /> } />
            <Route exact path="/music" component={Music} />
            <Route exact path="/setting" component={Setting} />
          </Switch>
        
      </div>
    </div>
  );
}

export default App;

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { SignUpForm } from "./components/SignUpForm";
import { SignInForm } from './components/SignInForm';
import { Data } from "./components/Data";
import { UsersData } from "./components/UsersData";
import { User } from './components/User';

export const App = () => {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/sign-up' component={SignUpForm} />
            <Route path='/sign-in' component={SignInForm} />
            <Route path='/data' component={Data} />
            <Route path='/users' component={UsersData} />
            <Route path='/user' component={User} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
};

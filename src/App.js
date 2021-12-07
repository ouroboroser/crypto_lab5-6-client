import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { SignInForm } from "./components/SignInForm";
import { Data } from "./components/Data";
import { UsersData } from "./components/UsersData";

const Home2 = () => {
  return (
    <div>
      <h1> bylaaaaaaaaaaaa ZHEEE</h1>
    </div>
  );
};

// class App extends Component {
//   render(){
//     return (
//       <Router>
//       <Switch>
//         <Route exact path = '/'  component = {Home} />
//         <Route  path = '/sign-in'  component = {Home2} />
//       </Switch>
//     </Router>
//     )
//   }
// }

export const App = () => {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/sign-in' component={SignInForm} />
            <Route path='/data' component={Data} />
            <Route path='/users' component={UsersData} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
};

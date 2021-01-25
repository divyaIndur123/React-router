import { Component } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { Route } from "react-router-dom";

const User = (params) => {
  return <h1>Welcome user: {params.username}</h1>;
};

class App extends Component {
  state = {
    LoggedIn: false
  };
  loginHandler = () => {
    console.log(this.state.LoggedIn);
    this.setState((prevState) => {
      return { LoggedIn: !prevState.LoggedIn };
    });
  };
  render() {
    return (
      <Router>
        <ul style={{ textDecoration: "none" }}>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "brown" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "brown" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/divya" exact activeStyle={{ color: "brown" }}>
              User
            </NavLink>
          </li>
        </ul>
        <button onClick={this.loginHandler}>
          {this.state.LoggedIn ? "LogOut" : "LogIn"}
        </button>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          />
        </div>
        <div>
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Welcome about</h1>;
            }}
          />
        </div>
        <div>
          <Route
            path="/user/:user"
            exact
            render={({ match }) => {
              return this.state.LoggedIn ? (
                <User username={match.params.user} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}
export default App;

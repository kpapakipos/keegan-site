import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AboutMeScreen from "screens/AboutMeScreen/AboutMeScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutMeScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

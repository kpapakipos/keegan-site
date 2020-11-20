import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AboutMeScreen from "screens/AboutMeScreen/AboutMeScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{ flexDirection: 'row', flex: 1 }}>
          <ul style={{ flex: 1 }}>
            <li style={{ flex: 1 }}>
              <Link to="">Home</Link>
            </li>
            <li style={{ flex: 1 }}>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>

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

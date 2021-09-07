import React, { createRef, useState } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HelloWorld from "./helloworld";

function HandTrack() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/helloworld">HandTrack-HelloWorld</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/helloworld">
              <HelloWorld />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default HandTrack

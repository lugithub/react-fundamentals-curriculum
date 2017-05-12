import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Forecast from './forecast';
import Home from './home';

function App() {
    return <Router>
      <div>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/forecast' component={Forecast} ></Route>
      </div>
    </Router>;
}

export default App;

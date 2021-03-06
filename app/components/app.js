import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Forecast from './forecast';
import Home from './home';
import Detail from './detail';
function App() {
    return <Router>
      <div>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/forecast' component={Forecast} ></Route>
        <Route path='/detail/:city' component={Detail} />
      </div>
    </Router>;
}

export default App;

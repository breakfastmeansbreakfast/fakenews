import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom'
import './index.css';
import App from './App';
import Question from './Question';
import notfound from './notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <NavLink exact actvieClassName="active" to="/">Home</NavLink>
        </li>
        {/*<li> TO ADD LATER
          <NavLink actvieClassName="active" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink actvieClassName="active" to="/learn">Learn</NavLink>
        </li>*/}
        <li>
          <NavLink actvieClassName="active" to="/questions">Take the test</NavLink>
        </li>
      </ul>
      <Switch><Route exact path="/" component={App} />
      {/* TO ADD ONCE COMPONENTS ARE DONE
      <Route path="/about" component={About} />
      <Route path="/learn" component={Learn} />*/}
      <Route path="/questions" component={Question} />
      <Route component={notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

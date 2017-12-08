import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter as Router, 
  Route,
  Link 
} from 'react-router-dom';
import Demo from './components/demo';
import PCDemo from './components-pc';
import './assets/css/main.scss';
import './assets/css/base.scss';

const App = () => (
  <Router>
    <div>
      <ul className="common-style">
        <li><Link to="/pc">PC</Link></li>
        <li><Link to="/mobile">Mobile</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={PCDemo}/>
      <Route path='/pc' component={PCDemo}/>
      <Route path="/mobile" component={Demo}/>
    </div>
  </Router>
)
  

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import Demo from './components/demo';
import './assets/css/main.scss';

const App = () => (
  <Router>
    <Route exact path='/' component={Demo}/>
  </Router>
)
  

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './components/App';
// import NOPE from './NOPE'
// import Auth from './Auth'
import * as serviceWorker from './serviceWorker';


// const routing = (
//     <Router>      
//       <Switch>
//         <Route path='/' exact component={App} />              
//         <Route path='/auth' component={Auth} />
//         <Route component={NOPE} />
//       </Switch>
//     </Router>
//   )
  
  // ReactDOM.render(routing, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
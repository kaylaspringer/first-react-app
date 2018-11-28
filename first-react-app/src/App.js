import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import { storeInstance } from './store';

class App extends Component {
  render() {
    return (
        <Provider store={storeInstance} >
          <Router>
            <div className="App">
              <div>
                  <Route exact path="/" component={PageOne} />
                  <Route exact path="/pageTwo" component={PageTwo} />
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;

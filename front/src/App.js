import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarDetail from './components/carDetail.component';
import Car from './components/car.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/offers" exact component={Car} />
          <Route path="/offers/:offerId/details" component={CarDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
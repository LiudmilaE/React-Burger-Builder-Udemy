import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1 className="App-title">Burger builder</h1>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from "unistore/react";
import { store } from "./store/store";
import Docular from './components/Docular';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Docular/>
      </Provider>
    );
  }
}

export default App;

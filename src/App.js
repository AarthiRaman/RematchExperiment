import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import store from './store';

import './App.css';

import EntryForm from './Components/Form/EntryForm';

const mapState = state => ({
  count: state.count
});

const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

const EntryFormContainer = connect(mapState, mapDispatch)(EntryForm)

class App extends Component {
  render() {
    console.log(store.getState());
    
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Text</h1>
          </header>
          <p className="App-intro">
            <EntryFormContainer />
          </p>
        </div>
      </Provider>
    );
  }
}


export default App;

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import store from './store';

import './App.css';

import EntryForm from './Components/Form/EntryForm';
import Wheel from './Components/Wheel/Wheel';

const mapState = state => ({
  form: state.form,
  wheel: state.wheel
});

const mapDispatch = ({ 
  form: { 
    increment, 
    updatePriority, 
    updateInput,
    formSubmit
  }}) => ({
  increment: () => increment(1),
  updateInput: (payload) => updateInput(payload),
  updatePriority: (payload) => updatePriority(payload),
  formSubmit: () => formSubmit(),
});

const EntryFormContainer = connect(mapState, mapDispatch)(EntryForm)
const WheelContainer = connect(mapState, mapDispatch)(Wheel)

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { form, wheel } = this.props;

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Aarthi's Color Wheel</h1>
            <div className="color-wheel">
              <WheelContainer />
            </div>
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

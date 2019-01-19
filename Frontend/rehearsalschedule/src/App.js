import React, {Component, Fragment} from 'react';
import './App.css';
import SingleGanntContainer from "./containers/ganttContainers/SingleGanntContainer";

class App extends Component {
  render() {
    return (
        <Fragment>
      <div className="App">
        <h1>I'm an App!</h1>
      <SingleGanntContainer/>
      </div>
        </Fragment>
    );
  }
}

export default App;

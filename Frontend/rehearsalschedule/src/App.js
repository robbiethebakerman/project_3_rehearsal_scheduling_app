import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CalendarContainer from './containers/calendarContainers/CalendarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Fragment>
                {/*Put any elements we want on all pages BEFORE or AFTER the Switch element below,
                e.g., Nav Bar put above it*/}
                <Switch>
                    {/*put all separate frontend routes within this Switch element
                    if using a url with a parameter (e.g., id), then remember to use the "render" props, e.g.,
                        <Route exact path="/pirates/:id" render={(props) => {
                            const id = props.match.params.id;
                            return <SinglePirateContainer id={id}/>
                      }}/>*/}
                    <Route exact path="/calendar" component={CalendarContainer}/>
                </Switch>
            </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

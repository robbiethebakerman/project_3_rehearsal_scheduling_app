import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.css';
import CalendarContainer from './containers/calendarContainers/CalendarContainer';
import SingleGanntContainer from "./containers/ganttContainers/SingleGanntContainer";
import NewRehearsalContainer from "./containers/formContainers/NewRehearsalContainer";
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
        <Fragment>
      <div className="App">
        <Router>
            <Fragment>
                <NavBar/>
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
                    <Route exact path="/gantt" component={SingleGanntContainer}/>
                    <Route exact path="/create-rehearsal" component={NewRehearsalContainer}/>
                </Switch>
            </Fragment>
        </Router>
      </div>
        </Fragment>
    );
  }
}

export default App;

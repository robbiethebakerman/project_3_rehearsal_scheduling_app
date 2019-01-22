import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.css';
import CalendarContainer from './containers/calendarContainers/CalendarContainer';
import SingleGanntContainer from "./containers/ganttContainers/SingleGanntContainer";
import NewMemberFormContainer from './containers/formContainers/NewMemberFormContainer';
import NewProjectFormContainer from './containers/formContainers/NewProjectFormContainer';
import NewRehearsalFormContainer from "./containers/formContainers/NewRehearsalFormContainer";
import NewTaskFormContainer from './containers/formContainers/NewTaskFormContainer';
import NewTeamFormContainer from './containers/formContainers/NewTeamFormContainer';
import ProjectContainer from './containers/ProjectContainer/ProjectContainer.js';
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

                    <Route exact path="/calendar/:id" render={(props) => {
                        const id = props.match.params.id;
                        return <SingleGanntContainer id={id}/>;}
                    } />
                    <Route exact path="/" component={ProjectContainer}/>
                    <Route exact path="/create-member" component={NewMemberFormContainer}/>
                    <Route exact path="/create-project" component={NewProjectFormContainer}/>
                    <Route exact path="/create-rehearsal" component={NewRehearsalFormContainer}/>
                    <Route exact path="/create-task" component={NewTaskFormContainer}/>
                    <Route exact path="/create-team" component={NewTeamFormContainer}/>
                </Switch>
            </Fragment>
        </Router>
      </div>
        </Fragment>
    );
  }
}

export default App;

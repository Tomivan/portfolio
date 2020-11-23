import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './work';
import Education from './Education';
import Certifications from './Certifications';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                <Route path="/work">
                    <Work user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user} />
                </Route>
                <Route path="/certifications">
                    <Certifications user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;
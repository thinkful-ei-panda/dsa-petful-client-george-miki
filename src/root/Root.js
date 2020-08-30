import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import AdoptionListPage from '../routes/AdoptionListPage';
import AdoptionPage from '../routes/AdoptionPage';
import LandingPage from '../routes/LandingPage';

class Root extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Switch>
                        <Route path={'/adoptionlistpage'} component={AdoptionListPage} />
                        <Route path={'/adoptionpage'} render={props => <AdoptionPage {...props} />} />
                        <Route path={'/'} component={LandingPage} />
                    </Switch>
                </main>
            </>
        );
    };
};

export default Root;

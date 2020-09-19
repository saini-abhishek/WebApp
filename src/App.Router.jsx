import React, { useEffect } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {useDispatch} from 'react-redux';

import Dashboard from './Module/Dashboard';
import AdvancedSearch from './Module/AdvancedSearch';
import Browse from './Module/Browse';
import AdvertisingPosters from './Module/AdvertisingPosters';
import AnnualReports from './Module/AnnualReports';
import PressRelease from './Module/PressRelease';
import SearchResults from './Module/SearchResults';
import NavBar from './Module/Dashboard/NavBar';
import { initialiseApp } from './Action'


const useStyles = makeStyles(() => ({
    appWrapper: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
    },
    mainLayout: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        
    },
    dashboard: {
        width: '90%',
        height: 'inherit',
    },
}));

const AppRouter = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    
    useEffect(() => {
        initialiseApp(dispatch);
    }, []);

    return (
        <Router>
            <div className={classes.appWrapper}>
                <div className={classes.mainLayout}>
                    <div className={classes.dashboard}>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/advanced-search" component={AdvancedSearch} />
                            <Route exact path="/browse" component={Browse} />
                            <Route exact path="/annual-reports" component={AnnualReports} />
                            <Route exact path="/press-release" component={PressRelease} />
                            <Route exact path="/advertising-posters" component={AdvertisingPosters} />
                            <Route exact path="/search-results/:value" component={SearchResults} />
                        </Switch>
                    </div>
                </div>                  
            </div>                
        </Router>
    )
}

export default AppRouter;
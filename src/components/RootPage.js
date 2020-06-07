import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoutes from '../util/routes/AuthRoutes';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../util/theming/theme';

import {
    CssBaseline
} from '@material-ui/core'

import FrontPage from './frontend/FrontPage';
import Login from './loggers/login/Login';
import Signup from './loggers/signup/Signup';

export default () => {
    return (
        <MuiThemeProvider theme={theme()}>
            <CssBaseline />
            <Router>
                <Switch>
                    <AuthRoutes path="/login" component={Login} />
                    <AuthRoutes path="/signup" component={Signup} />
                    <Route path="/" component={FrontPage} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}
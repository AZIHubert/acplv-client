import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoutes from '../util/routes/AuthRoutes';
import ProtectedRoutes from '../util/routes/ProtectedRoutes';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../util/theming/theme';

import {
    CssBaseline
} from '@material-ui/core'

import FrontPage from './frontend/FrontPage';
import BackPage from './backend/BackPage';
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
                    <ProtectedRoutes path="/backend" component={BackPage} />
                    <Route path="/" component={FrontPage} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}
import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../util/theming/theme'

import {
    CssBaseline
} from '@material-ui/core'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FrontPage from './frontend/FrontPage';

export default () => {
    return (
        <MuiThemeProvider theme={theme()}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/" component={FrontPage} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}
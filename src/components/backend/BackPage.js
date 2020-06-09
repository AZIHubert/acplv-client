import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import AppBar from './util/AppBar';
import Drawer from './util/Drawer';

import About from './about/About';
import Clients from './clients/Clients';
import General from './general/General';
import Projects from './projects/Projects';
import Services from './services/Services';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 0),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    return (
        <div className={classes.root}>
            <AppBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            <Drawer
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/backend" component={General} />
                    <Route path="/backend/about" component={About} />
                    <Route path="/backend/services" component={Services} />
                    <Route path="/backend/projects" component={Projects} />
                    <Route path="/backend/clients" component={Clients} />
                </Switch>
            </main>
      </div>
    );
};